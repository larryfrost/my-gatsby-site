import * as React from 'react'
import Layout from '../../../components/layout'
import Seo from '../../../components/seo'
import { graphql } from 'gatsby'

const ArticlePage = ({ data }) => {
  const articles = data.Drupal.nodeArticles.nodes;
  const filteredArticle = articles.find(article => article.title === "Dairy-free and delicious milk chocolate"); 

  return(
    <Layout>
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
      }
    }
  }
}`;

export const Head = () => <Seo title="Article Page" />

export default ArticlePage;