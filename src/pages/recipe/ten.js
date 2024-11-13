import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const RecipePage = ({ data }) => {
  const recipes = data.Drupal.nodeRecipes.edges.map(edge => edge.node);
  const filteredRecipe = recipes.find(recipe => recipe.title === "Borscht with pork ribs");

  return (
    <Layout>
    <div> 
      <StaticImage
        alt="borscht-with-pork-ribs-umami"
        src="http://csc496f24demo.tldr.dev/sites/default/files/borscht-with-pork-ribs-umami.jpg"
      />
      </div>
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
