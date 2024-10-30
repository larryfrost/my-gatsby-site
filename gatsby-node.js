const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Fetch articles
  const resultArticles = await graphql(`
    {
      Drupal {
        nodeArticles(first: 10) {
          nodes {
            id
            title
            path
          }
        }
      }
    }
  `);

  const articles = resultArticles.data.Drupal.nodeArticles.nodes;
  articles.forEach((articleData, index) => {
    // Use different component based on the index or any other logic if required.
    const componentPath = path.resolve(`src/pages/article/articles/${(index % 8) + 1}.js`);
    
    createPage({
      path: articleData.path,
      component: componentPath,
      context: {
        ArticleId: articleData.id,
      },
    });
  });

  // Fetch recipes
  const resultRecipes = await graphql(`
    {
      Drupal {
        nodeRecipes(first: 10) {
          edges {
            node {
              id
              title
              path
            }
          }
        }
      }
    }
  `);

  const recipes = resultRecipes.data.Drupal.nodeRecipes.edges.map(edge => edge.node);
  recipes.forEach((recipeData, index) => {
    // Again, using different component based on the index or any other logic if required.
    const componentPath = path.resolve(`src/pages/recipe/${(index % 10) + 1}.js`);
    
    createPage({
      path: recipeData.path,
      component: componentPath,
      context: {
        RecipeId: recipeData.id,
      },
    });
  });
};
