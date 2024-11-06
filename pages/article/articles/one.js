import * as React from 'react'
import Layout from '../../../components/layout'
import Seo from '../../../components/seo'
import { graphql } from 'gatsby'

const ArticlePage = ({ pageContext }) => {
  const { article } = pageContext
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
      nodes{
        id
        title
        body {
          processed
        }
      }
    }
  }
}`;

export const Head = () => <Seo title="Article Page" />

export default ArticlePage;
