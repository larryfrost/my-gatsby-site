import * as React from 'react'
import Layout from '../../../components/layout'
import Seo from '../../../components/seo'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const ArticlePage = ({ data }) => {
  const articles = data.Drupal.nodeArticles.nodes;
  const filteredArticle = articles.find(article => article.title === "Baking mishaps - our troubleshooting tips"); 

  return(
    <Layout>
      <div> 
      <StaticImage
        alt="chocolate-brownie-umami"
        src="http://csc496f24demo.tldr.dev/sites/default/files/chocolate-brownie-umami.jpg"
      />
      </div>
      <h1>{filteredArticle.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: filteredArticle.body.processed }}></div>
    </Layout>
  );  
};

export const query = graphql`
query Articles {
  Drupal {
    nodeArticles (first: 10) {
      nodes{
        id
        title
        body {
          processed
        }
        mediaImage{
          mediaImage{
                url
            }
        }
      }
    }
  }
}`;

export const Head = () => <Seo title="Article Page" />

export default ArticlePage;
