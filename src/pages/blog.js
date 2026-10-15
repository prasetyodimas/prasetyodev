import React, { useMemo, useState } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Bio from "../components/bio"
import BlockElement from "../components/blockElement"
import JsonLd from "../components/JsonLd"
import PropTypes from "prop-types"

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        timeToRead
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          dateIso: date
          title
          description
          tags
          featured
          status
          cover {
            childImageSharp {
              gatsbyImageData(width: 720, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

const PostCard = ({ post, className = "" }) => {
  const title = post.frontmatter.title || post.fields.slug
  const cover = getImage(post.frontmatter.cover)
  const tags = post.frontmatter.tags || []

  return (
    <article
      className={`post-card ${className}`}
      itemScope
      itemType="http://schema.org/Article"
    >
      <Link to={post.fields.slug} itemProp="url" className="post-card-link">
        {cover && (
          <div className="post-card-cover">
            <GatsbyImage image={cover} alt={title} itemProp="image" />
          </div>
        )}
        <div className="post-card-body">
          <div className="post-card-meta">
            <time dateTime={post.frontmatter.dateIso}>
              {post.frontmatter.date}
            </time>
            {post.timeToRead && (
              <span className="post-card-readtime">
                {post.timeToRead} min read
              </span>
            )}
          </div>
          <h3 className="post-card-title" itemProp="headline">
            {title}
          </h3>
          <p
            className="post-card-excerpt"
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
          {tags.length > 0 && (
            <ul className="post-card-tags">
              {tags.map(tag => (
                <li key={tag} className="post-tag">
                  #{tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </article>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  className: PropTypes.string,
}

const Blog = ({ data, location }) => {
  const allNodes = data.allMarkdownRemark.nodes
  const posts = allNodes.filter(p => p.frontmatter.status !== "upcoming")
  const upcoming = allNodes.filter(p => p.frontmatter.status === "upcoming")

  const [activeTag, setActiveTag] = useState(null)

  const allTags = useMemo(
    () => [...new Set(posts.flatMap(p => p.frontmatter.tags || []))],
    [posts]
  )

  const featuredPost =
    posts.find(p => p.frontmatter.featured) || posts[0] || null

  const gridPosts = posts
    .filter(p => p !== featuredPost)
    .filter(p => !activeTag || (p.frontmatter.tags || []).includes(activeTag))

  return (
    <Layout location={location} title={`Blog`}>
      <BlockElement className="blog-wrapper" component="div">
        <header className="blog-header">
          <h1 className="blog-title">Blog</h1>
          <p className="blog-subtitle">
            Artikel, catatan, dan insight seputar web development, frontend, dan
            software engineering.
          </p>
          <a className="blog-rss" href="/rss.xml">
            Subscribe via RSS
          </a>
        </header>

        {featuredPost && (
          <section className="blog-featured" aria-label="Featured post">
            <PostCard post={featuredPost} className="post-card--featured" />
          </section>
        )}

        {allTags.length > 0 && (
          <nav className="blog-tags" aria-label="Filter posts by tag">
            <button
              className={`tag-chip ${activeTag === null ? "active" : ""}`}
              onClick={() => setActiveTag(null)}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`tag-chip ${activeTag === tag ? "active" : ""}`}
                onClick={() =>
                  setActiveTag(activeTag === tag ? null : tag)
                }
              >
                #{tag}
              </button>
            ))}
          </nav>
        )}

        {gridPosts.length > 0 ? (
          <section className="blog-grid" aria-label="Recent posts">
            {gridPosts.map(post => (
              <PostCard key={post.fields.slug} post={post} />
            ))}
          </section>
        ) : (
          <p className="blog-empty">
            {activeTag
              ? `Belum ada artikel untuk tag #${activeTag}.`
              : `Belum ada artikel lain.`}
          </p>
        )}

        {upcoming.length > 0 && (
          <section className="blog-upcoming" aria-label="Upcoming posts">
            <h2 className="blog-section-title">In the pipeline</h2>
            <div className="blog-grid blog-grid--upcoming">
              {upcoming.map(post => (
                <article key={post.fields.slug} className="post-card is-upcoming">
                  <div className="post-card-body">
                    <span className="upcoming-badge">Coming soon</span>
                    <h3 className="post-card-title">
                      {post.frontmatter.title}
                    </h3>
                    <p className="post-card-excerpt">
                      {post.frontmatter.description || post.excerpt}
                    </p>
                    {(post.frontmatter.tags || []).length > 0 && (
                      <ul className="post-card-tags">
                        {post.frontmatter.tags.map(tag => (
                          <li key={tag} className="post-tag">
                            #{tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="d-flex justify-content-center p-4">
          <Bio className="mt-5" />
        </div>
      </BlockElement>
    </Layout>
  )
}

Blog.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
}

export const Head = ({ data }) => {
  const siteUrl = data?.site?.siteMetadata?.siteUrl
  const posts = (data?.allMarkdownRemark?.nodes || []).filter(
    p => p.frontmatter.status !== "upcoming"
  )

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog | Dimas Prasetyo",
    description:
      "Artikel dan insight seputar web development, frontend, dan fullstack oleh Dimas Prasetyo (Prasetyodimas).",
    url: `${siteUrl}/blog/`,
    inLanguage: "id-ID",
    blogPost: posts.map((post, index) => ({
      "@type": "BlogPosting",
      position: index + 1,
      headline: post.frontmatter.title,
      url: `${siteUrl}${post.fields.slug}`,
      datePublished: post.frontmatter.dateIso,
      description: post.frontmatter.description || post.excerpt,
    })),
  }

  return (
    <Seo
      title="Blog"
      description="Artikel dan insight seputar web development, frontend, dan fullstack oleh Dimas Prasetyo (Prasetyodimas)."
      pathname="/blog/"
    >
      <JsonLd data={blogJsonLd} />
    </Seo>
  )
}

export default Blog
