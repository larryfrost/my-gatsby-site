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
  const articleTemplate = path.resolve(`src/pages/article/index.js`);
  result.data.Drupal.nodeArticles.nodes.forEach(node => {
    createPage({
      path: `/en/articles/${node.title.toLowerCase().replace(/\s+/g, '-')}`,
      component: articleTemplate,
      context: {
        id: node.id,
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
    
  const recipePostTemplate = path.resolve(`src/pages/recipe/index.js`);
  result2.data.Drupal.nodeRecipes.edges.forEach(({node}) => {
    createPage({
      path: `/en/recipes/${node.title.toLowerCase().replace(/\s+/g, '-')}`,
      component: recipePostTemplate,
      context: {
        id: node.id,
      },
    });
  });
  };
