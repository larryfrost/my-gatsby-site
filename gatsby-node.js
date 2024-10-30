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
const recipeComponents = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
  
const recipes = result.data.Drupal.nodeRecipes.edges.node;
recipes.forEach((recipedata) => {
  const componentIndex = RecipeId; // e.g., use RecipeId or other data
  const componentName = recipeComponents[componentIndex];
  const componentPath = path.resolve(`src/pages/recipe/${componentName}.js`);

  createPage({
    path: recipedata.path,
    component: componentPath,
    context: {
      RecipeId: recipedata.id,
    },
  });
});
};
