import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ArticlePage = () => {
  return (
    <Layout pageTitle="Article Page">
      <h2>
        <div>
          <p> 1. <a href="https://csc496f24demo.tldr.dev/en/articles/give-it-a-go-and-grow-your-own-herbs">
              Give it a go and grow your own herbs.
            </a></p>

            <p> 2. <a href="https://csc496f24demo.tldr.dev/en/articles/dairy-free-and-delicious-milk-chocolate">
              Dairy-free and delicious milk chocolate.
            </a></p>

            <p> 3. <a href="https://csc496f24demo.tldr.dev/en/articles/the-real-deal-for-supermarket-savvy-shopping">
              The real deal for supermarket savvy shopping.
            </a></p>

            <p> 4. <a href="https://csc496f24demo.tldr.dev/en/articles/the-umami-guide-to-our-favourite-mushrooms">
              The Umami guide to our favorite mushrooms.
            </a></p>

            <p> 5. <a href="https://csc496f24demo.tldr.dev/en/articles/lets-hear-it-for-carrots">
              Let's hear it for carrots.
            </a></p>

            <p> 6. <a href="https://csc496f24demo.tldr.dev/en/articles/baking-mishaps-our-troubleshooting-tips">
              Baking mishaps - our troubleshooting tips.
            </a></p>

            <p> 7. <a href="https://csc496f24demo.tldr.dev/en/articles/skip-the-spirits-with-delicious-mocktails">
              Skip the spirits with delicious mocktails.
            </a></p>

            <p> 8. <a href="https://csc496f24demo.tldr.dev/en/articles/give-your-oatmeal-the-ultimate-makeover">
              Give your oatmeal the ultimate makeover.
            </a></p>
        </div>
      </h2>
    </Layout>
  )
}

export const Head = () => <Seo title="Article Page" />

export default ArticlePage