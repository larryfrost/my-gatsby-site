/*const path = require(`path`)
const templatePath = path.resolve(`PATH/TO/recipes.js`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve('src/pages/recipes.js')
  //const articleTemplate = path.resolve('src/pages/article.js')
  const result = await graphql(`
  query {
        Drupal {
          allnoderecipes(first: 100) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    `)
 result.data.Drupal.nodeRecipes.edges.forEach(({node}) => {
    createPage({
      path: node.path.alias,
      component: pageTemplate,
      context: {
        recipe: node
      },
    })
  })
}*/