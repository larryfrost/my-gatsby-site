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
    const article = path.resolve(`src/pages/articles/index.js`)
    articles.forEach(articledata => {
      createPage({
        path: articledata.path,
        const articlePath = `${element.node.path}`.slice(3);
        createPage({
            path: articlePath,
            component: article,
            context: {
              title: element.node.title,
              id: element.node.id,
              body: element.node.body.processed,
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
    const recipe = path.resolve('src/pages/recipe/index.js'),
    recipes.forEach(recipedata => {
      createPage({
        path: recipedata.path,
        component: recipe,
            context: {
              title: recipedata.node.title,
              id: recipedata.node.id,
              instructions: element.node.recipeInstruction.processed,
              summary: element.node.summary.processed,
      });
    });
  };
