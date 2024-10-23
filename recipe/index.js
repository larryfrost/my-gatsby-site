import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const recipePage = () => {
  return (
    <Layout pageTitle="Recipe Page">
           <h2>
        <div>
          <p> 1. <a href="https://csc496f24demo.tldr.dev/en/recipes/deep-mediterranean-quiche">
            SUUPRDEEP mediterranean quiche  .
            </a></p>

            <p> 2. <a href="https://csc496f24demo.tldr.dev/en/recipes/vegan-chocolate-and-nut-brownies">
              Vegan chocolate and nut brownies.
            </a></p>

            <p> 3. <a href="https://csc496f24demo.tldr.dev/en/recipes/super-easy-vegetarian-pasta-bake">
              Super easy vegetarian pasta bake.
            </a></p>

            <p> 4. <a href="https://csc496f24demo.tldr.dev/en/recipes/watercress-soup">
              Watercress soup.
            </a></p>

            <p> 5. <a href="https://csc496f24demo.tldr.dev/en/recipes/victoria-sponge-cake">
              Victoria sponge cake.
            </a></p>

            <p> 6. <a href="https://csc496f24demo.tldr.dev/en/recipes/gluten-free-pizza">
              Gluten free pizza.
            </a></p>

            <p> 7. <a href="https://csc496f24demo.tldr.dev/en/recipes/thai-green-curry">
              Thai green curry.
            </a></p>

            <p> 8. <a href="https://csc496f24demo.tldr.dev/en/recipes/crema-catalana">
              Crema catalana.
            </a></p>

            <p> 9. <a href="https://csc496f24demo.tldr.dev/en/recipes/fiery-chili-sauce">
              Fiery chili sauce.
            </a></p>

            <p> 10. <a href="https://csc496f24demo.tldr.dev/en/recipes/borscht-with-pork-ribs">
              Borscht with pork ribs.
            </a></p>
        </div>
      </h2>
    </Layout>
  )}
export const Head = () => <Seo title="Recipe Page" />

export default recipePage;