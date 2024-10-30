import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ArticlePage = ({ data }) => {
  return(
    <Layout>
       <article><h2><a href="/article/articles/one">Give it a go and grow your own herbs</a></h2></article>
       <article><h2><a href="/article/articles/two">Dairy-free and delicious milk chocolate</a></h2></article>
       <article><h2><a href="/article/articles/three"> The real deal for supermarket savvy shopping</a></h2></article>
       <article><h2><a href="/article/articles/four">The Umami guide to our favorite mushrooms</a></h2></article>
       <article><h2><a href="/article/articles/five">Let's hear it for carrots</a></h2></article>
       <article><h2><a href="/article/articles/six">Baking mishaps - our troubleshooting tips</a></h2></article>
       <article><h2><a href="/article/articles/seven">Skip the spirits with delicious mocktails</a></h2></article>
       <article><h2><a href="/article/articles/eight">Give your oatmeal the ultimate makover</a></h2></article>
    </Layout>
  );  
};

export const Head = () => <Seo title="Article Page" />

export default ArticlePage;