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
    const articleTemone = component: path.resolve('src/pages/article/articles/one.js'),
    const articleTemtwo = component: path.resolve('src/pages/article/articles/two.js'),
    const articleTemthree = component: path.resolve('src/pages/article/articles/three.js'),
    const articleTemfour = component: path.resolve('src/pages/article/articles/four.js'),
    const articleTemfive = component: path.resolve('src/pages/article/articles/five.js'),
    const articleTemsix = component: path.resolve('src/pages/article/articles/six.js'),
    const articleTemseven = component: path.resolve('src/pages/article/articles/seven.js'),
    const articleTemeight = component: path.resolve('src/pages/article/articles/eight.js'),
      
    articles.forEach(articledata => {
      createPage({
        path: articledata.path,
        component: articleTemone,
        context: {
          ArticleId: articledata.id,
        },

        component: articleTemtwo,
        context: {
          ArticleId: articledata.id,
        },

        component: articleTemthree,
        context: {
          ArticleId: articledata.id,
        },
        
        component: articleTemfour,
        context: {
          ArticleId: articledata.id,
        },

        component: articleTemfive,
        context: {
          ArticleId: articledata.id,
        },

        component: articleTemsix,
        context: {
          ArticleId: articledata.id,
        },

        component: articleTemseven,
        context: {
          ArticleId: articledata.id,
        },

        component: articleTemeight,
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
    const recipeTemone = component: path.resolve('src/pages/recipe/one.js'),
    const recipeTemtwo = component: path.resolve('src/pages/recipe/two.js'),
    const recipeTemthree = component: path.resolve('src/pages/recipe/three.js'),
    const recipeTemfour = component: path.resolve('src/pages/recipe/four.js'),
    const recipeTemfive = component: path.resolve('src/pages/recipe/five.js'),
    const recipeTemsix = component: path.resolve('src/pages/recipe/six.js'),
    const recipeTemseven = component: path.resolve('src/pages/recipe/seven.js'),
    const recipeTemeight = component: path.resolve('src/pages/recipe/eight.js'),
    const recipeTemnine = component: path.resolve('src/pages/recipe/nine.js'),
    const recipeTemten = component: path.resolve('src/pages/recipe/ten.js'),
    recipes.forEach(recipedata => {
      createPage({
        path: recipedata.path,
        component: recipeTemone,
        context: {
          title: recipedata.title,
          id: recipedata.id,
        },

        component: recipeTemtwo,
        context: {
          title: recipedata.title,
          id: recipedata.id,
        },

        component: recipeTemthree,
        context: {
          title: recipedata.title,
          id: recipedata.id,
        },

        component: recipeTemfour,
        context: {
          title: recipedata.title,
          id: recipedata.id,
        },

        component: recipeTemfive,
        context: {
          title: recipedata.title,
          id: recipedata.id,
        },

        component: recipeTemsix,
        context: {
          title: recipedata.title,
          id: recipedata.id,
        },

        component: recipeTemseven,
        context: {
          title: recipedata.title,
          id: recipedata.id,
        },
        
        component: recipeTemeight,
        context: {
          title: recipedata.title,
          id: recipedata.id,
        },
        
        component: recipeTemnine,
        context: {
          title: recipedata.title,
          id: recipedata.id,
        },
        
        component: recipeTemten,
        context: {
          title: recipedata.title,
          id: recipedata.id,
        },
      });
    });
  };
