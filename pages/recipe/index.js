import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { graphql } from 'gatsby';

const RecipePage = ({ pageContext }) => {
  const { id } = pageContext
  const recipe = data.recipeAPI.nodeRecipes.edges.find(({ node }) => node.id === id).node;
  return (
    <Layout>
      <h1>{recipe.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: recipe.summary.processed }}></div>
      <div dangerouslySetInnerHTML={{ __html: recipe.recipeInstruction.value }}></div>
    </Layout>
  );
};

export const query = graphql`
query Recipes {
  recipeAPI {
    nodeRecipes(first: 10) {
      edges {
        node {
          changed
          id
          cookingTime
          created
          path
          status
          preparationTime
          numberOfServings
          summary {
            processed
          }
          recipeInstruction{
            value
          }
          title
        }
      }
    }
  }
}`;

export const Head = () => <Seo title="Recipe Page" />

export default RecipePage;
