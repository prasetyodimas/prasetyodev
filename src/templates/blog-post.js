import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import JsonLd from "../components/JsonLd"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const cover = getImage(post.frontmatter.cover)
  const tags = post.frontmatter.tags || []

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="post-hero">
          <Link to="/blog/" className="post-back">
            ← Back to blog
          </Link>
          {tags.length > 0 && (
            <ul className="post-hero-tags">
              {tags.map(tag => (
                <li key={tag} className="post-tag">
                  #{tag}
                </li>
              ))}
            </ul>
          )}
          <h1 className="post-hero-title" itemProp="headline">
            {post.frontmatter.title}
          </h1>
          <div className="post-hero-meta">
            <time dateTime={post.frontmatter.dateIso} itemProp="datePublished">
              {post.frontmatter.date}
            </time>
            {post.timeToRead && (
              <span className="post-hero-readtime">
                {post.timeToRead} min read
              </span>
            )}
          </div>
          {cover && (
            <div className="post-hero-cover">
              <GatsbyImage image={cover} alt={post.frontmatter.title} />
            </div>
          )}
        </header>

        <section
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />

        <footer className="post-footer">
          <Bio />
        </footer>
      </article>

      <nav className="blog-post-nav" aria-label="More posts">
        {previous ? (
          <Link to={previous.fields.slug} rel="prev" className="post-nav-card">
            <span className="post-nav-label">← Previous</span>
            <span className="post-nav-title">
              {previous.frontmatter.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={next.fields.slug} rel="next" className="post-nav-card next">
            <span className="post-nav-label">Next →</span>
            <span className="post-nav-title">{next.frontmatter.title}</span>
          </Link>
        )}
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post, site } }) => {
  const { siteUrl, author } = site.siteMetadata
  const publishedIso = new Date(post.frontmatter.date).toISOString()
  const postUrl = `${siteUrl}${post.fields.slug}`

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description: post.frontmatter.description || post.excerpt,
    datePublished: publishedIso,
    inLanguage: "id-ID",
    mainEntityOfPage: postUrl,
    url: postUrl,
    author: {
      "@type": "Person",
      name: author.name,
      url: siteUrl,
    },
  }

  const coverUrl = post.frontmatter.cover?.publicURL
    ? `${siteUrl}${post.frontmatter.cover.publicURL}`
    : undefined

  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      pathname={post.fields.slug}
      type="article"
      image={coverUrl}
    >
      <meta property="article:published_time" content={publishedIso} />
      <meta property="article:author" content={author.name} />
      {(post.frontmatter.tags || []).map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      <JsonLd
        data={{
          ...articleJsonLd,
          keywords: (post.frontmatter.tags || []).join(", "),
          ...(coverUrl ? { image: coverUrl } : {}),
        }}
      />
    </Seo>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
        author {
          name
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        dateIso: date
        description
        tags
        cover {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 1200, placeholder: BLURRED)
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
