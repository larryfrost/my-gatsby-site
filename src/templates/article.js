import * as React from 'react'
import Layout from '../../../components/layout'
import Seo from '../../../components/seo'
import { graphql } from 'gatsby'

const ArticlePage = ({ pageContext }) => {
  const { id } = pageContext
  const article = data.Drupal.nodeArticles.edges.find(({ node }) => node.id === id).node;
  return(
    <Layout>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.body.processed }}></div>
    </Layout>
  );  
};

export const query = graphql`
query Articles {
  Drupal {
    nodeArticles (first: 10) {
      edges{
        node{
          id
          title
          body {
            processed
          }
        }
    }
    }
  }
}`;

export const Head = () => <Seo title="Article Page" />

export default ArticlePa
