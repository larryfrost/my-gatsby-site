const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

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
      component: path.resolve('src/pages/recipe/index.js'),
      context: {
        id: node.id,
      },
    });
  });

  articles.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: path.resolve('src/pages/article/index.js'),
      context: {
        id: node.id,
      },
    });
  });
};
