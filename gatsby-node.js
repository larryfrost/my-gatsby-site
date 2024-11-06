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

    const articleTemone =  path.resolve('src/pages/article/articles/one.js')
    const articleTemtwo =  path.resolve('src/pages/article/articles/two.js')
    const articleTemthree =  path.resolve('src/pages/article/articles/three.js')
    const articleTemfour =  path.resolve('src/pages/article/articles/four.js')
    const articleTemfive =  path.resolve('src/pages/article/articles/five.js')
    const articleTemsix =  path.resolve('src/pages/article/articles/six.js')
    const articleTemseven =  path.resolve('src/pages/article/articles/seven.js')
    const articleTemeight =  path.resolve('src/pages/article/articles/eight.js')
    const articles = result.data.Drupal.nodeArticles.nodes;
    articles.forEach(articledata => {
      createPage({
        path: articleTemone,
        component: articleTemone,
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


    const recipeTemone =  path.resolve('src/pages/recipe/one.js')
    const recipeTemtwo =  path.resolve('src/pages/recipe/two.js')
    const recipeTemthree =  path.resolve('src/pages/recipe/three.js')
    const recipeTemfour =  path.resolve('src/pages/recipe/four.js')
    const recipeTemfive =  path.resolve('src/pages/recipe/five.js')
    const recipeTemsix =  path.resolve('src/pages/recipe/six.js')
    const recipeTemseven =  path.resolve('src/pages/recipe/seven.js')
    const recipeTemeight =  path.resolve('src/pages/recipe/eight.js')
    const recipeTemnine =  path.resolve('src/pages/recipe/nine.js')
    const recipeTemten =  path.resolve('src/pages/recipe/ten.js')
    const recipes = result2.data.Drupal.nodeRecipes.edges.map(edge => edge.node)
    recipes.forEach(recipedata => {
      createPage({
        path: recipeTemone,
        component: recipeTemone,
        context: {
          RecipeId: recipedata.id,
        },
      });
    });
  };
