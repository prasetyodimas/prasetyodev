import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Bio from "../components/bio"
import BlockElement from "../components/blockElement"
import PropTypes from "prop-types"

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

const Blog = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={`Blog`}>
      <Seo title="Blog" />
      <BlockElement className="blog-wrapper" component="div">
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
        <div className="d-flex justify-content-center p-4">
          <Bio className="mt-5" />
        </div>
      </BlockElement>
    </Layout>
  )
}

Blog.propTypes = {
  location: PropTypes.object,
}

export default Blog
