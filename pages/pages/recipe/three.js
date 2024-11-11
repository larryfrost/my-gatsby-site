import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { graphql } from 'gatsby';

const RecipePage = ({ data }) => {
  const recipes = data.Drupal.nodeRecipes.edges.map(edge => edge.node);
  const filteredRecipe = recipes.find(recipe => recipe.title === "Super easy vegetarian pasta bake");

  return (
    <Layout>
      <h1>{filteredRecipe.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: filteredRecipe.summary.processed }}></div>
      <div dangerouslySetInnerHTML={{ __html: filteredRecipe.recipeInstruction.value }}></div>
    </Layout>
  );
};

export const query = graphql`
query Recipes {
  Drupal {
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
