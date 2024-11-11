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
      path: `/recipe/${node.title}`,
      component: `/recipe/${node.title}`,
      context: {
        node: node,
      },
    });
  });

  articles.forEach(({ node }) => {
    createPage({
      path: `/article/${node.title}`,
      component: `/article/${node.title}`,
      context: {
        article: node,
      },
    });
  });
};
