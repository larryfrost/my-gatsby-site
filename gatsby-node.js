const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const recipeTemplate = path.resolve('src/pages/template/recipe.js');
  const articleTemplate = path.resolve('src/pages/template/article.js');
  
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
      component: recipeTemplate,
      context: {
        id: node.id,
      },
    });
  });

  articles.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: articleTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
