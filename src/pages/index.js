import React, { Component } from 'react'
import Helmet from 'react-helmet'
import GitHubButton from 'react-github-btn'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SimpleListing from '../components/SimpleListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'
import speaking from '../../data/speaking'
import podcasts from '../../data/podcasts'
import quotes from '../../data/quotes'
import tania from '../../content/images/profile.jpg'

export default class Index extends Component {
  render() {
    const { data } = this.props

    const latestPostEdges = data.latest.edges
    const popularPostEdges = data.popular.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Penulis Biasa`} />
        <SEO />
       <div class="container">
     <div class="elevator">
      <h1>Halo, Saya Risky Muhamad</h1>

           <p>Situs ini berisi tulisan, ketika saya belajar berbagai macam hal. Lalu membagikannya agar dapat bermanfaat ke banyak orang, dan juga merupakan dokumentasi saya pribadi untuk dimasa yang akan datang. situs ini bebas dari iklan karena saya sendiri sering terganggu dengan adanya iklan. Selamat membaca! 😁 </p>

         </div>
        <div class="lead">
      </div>
    </div>

        <div className="container front-page">
          <section className="section">
            <h2>
              Tulisan Terakhir
              <Link to="/blog" className="view-all">
                View all
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>
              Tulisan Populer
              <Link to="/categories/popular" className="view-all">
                View all
              </Link>
            </h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>
          <section className="section">
            <h2>{`Quote Motivasi`}</h2>
            <div className="quotations">
              {quotes.map(quote => (
                <blockquote className="quotation" key={quote.name}>
                  <p>{quote.quote}</p>
                  <cite>— {quote.name}</cite>
                </blockquote>
              ))}
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 9
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
