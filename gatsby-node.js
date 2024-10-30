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
    articles.forEach(articledata => {
      createPage({
        path: articledata.path,
        component: path.resolve('src/pages/article/articles/one.js'),
        component: path.resolve('src/pages/article/articles/two.js'),
        component: path.resolve('src/pages/article/articles/three.js'),
        component: path.resolve('src/pages/article/articles/four.js'),
        component: path.resolve('src/pages/article/articles/five.js'),
        component: path.resolve('src/pages/article/articles/six.js'),
        component: path.resolve('src/pages/article/articles/seven.js'),
        component: path.resolve('src/pages/article/articles/eight.js'),
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
    recipes.forEach(recipedata => {
      createPage({
        path: recipedata.path,
        component: path.resolve('src/pages/recipe/one.js'),

        path: recipedata.path,
        component: path.resolve('src/pages/recipe/two.js'),

        path: recipedata.path,
        component: path.resolve('src/pages/recipe/three.js'),

        path: recipedata.path,
        component: path.resolve('src/pages/recipe/four.js'),

        path: recipedata.path,
        component: path.resolve('src/pages/recipe/five.js'),

        path: recipedata.path,
        component: path.resolve('src/pages/recipe/six.js'),

        path: recipedata.path,
        component: path.resolve('src/pages/recipe/seven.js'),

        path: recipedata.path,
        component: path.resolve('src/pages/recipe/eight.js'),

        path: recipedata.path,
        component: path.resolve('src/pages/recipe/nine.js'),

        path: recipedata.path,
        component: path.resolve('src/pages/recipe/ten.js'),
        context: {
          RecipeId: recipedata.id,
        },
      });
    });
  };
