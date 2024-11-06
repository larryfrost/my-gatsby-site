const path = require(`path`)
const fs = require('fs');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions


  const result = await graphql(`
      {
      Drupal {
        nodeArticles(first: 10) {
          nodes {
            id
            title
            slug
          }
        }
      }
    }
    `);

    const articleTemplates = [
        path.resolve(`src/pages/article/articles/one.js`),
        path.resolve(`src/pages/article/articles/two.js`),
        path.resolve(`src/pages/article/articles/three.js`),
        path.resolve(`src/pages/article/articles/four.js`),
        path.resolve(`src/pages/article/articles/five.js`),
        path.resolve(`src/pages/article/articles/six.js`),
        path.resolve(`src/pages/article/articles/seven.js`),
        path.resolve(`src/pages/article/articles/eight.js`)
    ];
    const articles = result.data.Drupal.nodeArticles.nodes;
  
    articles.forEach(articledata => {
      const articlePath = `/article/articles/${articledata.slug || articledata.id}`;
      createPage({
        path: articlePath,
        component: require.resolve(articleTemplates[0]),
        context:{
         ArticleId: articledata.id,
        }
      });
    });
  
  const result2 = await graphql(`
      {
      Drupal {
        nodeRecipes(first: 10) {
          edges {
            node{
              id
              title
              slug
            } 
          }
        }
      }
    }
    `);


  const recipeTemplates = [
        path.resolve('src/pages/recipe/one.js'),
        path.resolve('src/pages/recipe/two.js'),
        path.resolve('src/pages/recipe/three.js'),
        path.resolve('src/pages/recipe/four.js'),
        path.resolve('src/pages/recipe/five.js'),
        path.resolve('src/pages/recipe/six.js'),
        path.resolve('src/pages/recipe/seven.js'),
        path.resolve('src/pages/recipe/eight.js'),
        path.resolve('src/pages/recipe/nine.js'),
        path.resolve('src/pages/recipe/ten.js')
    ];
    
    const recipes = result2.data.Drupal.nodeRecipes.edges.map(edge => edge.node)
    recipes.forEach(recipedata => {
      const recipePath = `/recipe/${recipedata.slug || recipedata.id}`;
      createPage({
        path: recipePath,
        component: require.resolve(recipeTemplates[0]),
        context:{
         RecipeId: recipedata.id,
        }
      });
    });
  };
