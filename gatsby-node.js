const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const recipeTemplate = path.resolve('src/pages/recipe/index.js');
  const articleTemplate = path.resolve('src/article/index.js');

  const result = await graphql(`
    {
      Drupal {
        nodeRecipes(first: 100) {
          edges {
            node {
              id
              path
              title
            }
          }
        }
        nodeArticles(first: 100) {
          edges {
            node {
              id
              path
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  const recipes = result.data.Drupal.nodeRecipes.edges;
  const articles = result.data.Drupal.nodeArticles.edges;

  recipes.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: node
      context: {
        id: node.id,
      },
    });
  });

  articles.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: node
      context: {
        id: node.id,
      },
    });
  });
};
