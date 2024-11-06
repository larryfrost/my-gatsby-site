const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions


  const result = await graphql(`
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

    const articles = result.data.Drupal.nodeArticles.nodes;
    conat articleTem = component: path.resolve('src/pages/article/articles/index.js'),
    articles.forEach(articledata => {
      createPage({
        path: articledata.path,
        component: articleTem,
        context: {
          ArticleId: articledata.id,
        },
      });
    });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result2 = await graphql(`
      {
      Drupal {
        nodeRecipes(first: 10) {
          edges {
            node{
              id
              title
              path
            } 
          }
        }
      }
    }
    `);
    const recipes = result2.data.Drupal.nodeRecipes.edges.map(edge => edge.node)
    const recipeTem = component: path.resolve('src/pages/recipe/index.js'),
    recipes.forEach(recipedata => {
      createPage({
        path: recipedata.path,
        component: recipeTem,
        context: {
          title: recipedata.title,
          id: recipedata.id,
        },
      });
    });
  };
