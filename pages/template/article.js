import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ArticlePage = ({ data }) => {
  return(
    <Layout>
       <article><h2><a href="/pages/article/one">Give it a go and grow your own herbs</a></h2></article>
       <article><h2><a href="pages/article/two">Dairy-free and delicious milk chocolate</a></h2></article>
       <article><h2><a href="pages/article/three"> The real deal for supermarket savvy shopping</a></h2></article>
       <article><h2><a href="pages/article/four">The Umami guide to our favorite mushrooms</a></h2></article>
       <article><h2><a href="pages/article/five">Let's hear it for carrots</a></h2></article>
       <article><h2><a href="pages/article/six">Baking mishaps - our troubleshooting tips</a></h2></article>
       <article><h2><a href="pages/article/seven">Skip the spirits with delicious mocktails</a></h2></article>
       <article><h2><a href="pages/article/eight">Give your oatmeal the ultimate makover</a></h2></article>
    </Layout>
  );  
};

export const Head = () => <Seo title="Article Page" />

export default ArticlePage;
