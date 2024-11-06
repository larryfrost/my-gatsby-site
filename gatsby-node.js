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
          }
        }
      }
    }
    `);

    const articleTemplate = path.resolve(`src/pages/article/index.js`)
  result.data.Drupal.nodeArticles.forEach(({nodes}) => {
    createPage({
      path: `/article/${nodes.title}`,
      component: articleTemplate,
      context: {
        article: node,
      },
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
            } 
          }
        }
      }
    }
    `);
    
  const recipePostTemplate = path.resolve(`src/pages/recipe/index.js`)
  result.data.Drupal.nodeRecipes.edges.forEach(({node}) => {
    createPage({
      path: `/recipe/${node.title}`,
      component: recipePostTemplate,
      context: {
        recipe: node,
      },
    });
  });
  };
