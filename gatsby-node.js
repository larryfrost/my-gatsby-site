const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      Drupal {
        nodeArticles(first: 10) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
  `);

  const articleTemplate = path.resolve(`src/pages/article/index.js`);

  if (result.errors) {
    console.error("Error in GraphQL query:", result.errors);
    return;
  }

  result.data.Drupal.nodeArticles.edges.forEach(({ node }) => {
    if (node) {
      createPage({
        path: `/en/articles/${node.title.toLowerCase().replace(/\s+/g, '-')}`,
        component: articleTemplate,
        context: {
          id: node.id,
        },
      });
    } else {
      console.warn('Node is undefined'); // for debugging
    }
  });

  // Similar code for recipes...
  const result2 = await graphql(`
    {
      Drupal {
        nodeRecipes(first: 10) {
          edges {
            node{
              id
              title
            } 
          }
        }
      }
    }
  `);

  const recipePostTemplate = path.resolve(`src/pages/recipe/index.js`);

  if (result2.errors) {
    console.error("Error in GraphQL query:", result2.errors);
    return;
  }

  result2.data.Drupal.nodeRecipes.edges.forEach(({ node }) => {
    if (node) {
      createPage({
        path: `/en/recipes/${node.title.toLowerCase().replace(/\s+/g, '-')}`,
        component: recipePostTemplate,
        context: {
          id: node.id,
        },
      });
    } else {
      console.warn('Node is undefined'); // for debugging
    }
  });
};
