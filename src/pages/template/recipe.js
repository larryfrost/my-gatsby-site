import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ArticlePage = ({ data }) => {
  return(
    <Layout>
       <article><h2><a href="/recipe/one">SUUPRDEEP mediterranean quiche</a></h2></article>
       <article><h2><a href="/recipe/two">Vegan chocolate and nut brownies</a></h2></article>
       <article><h2><a href="/recipe/three">Super easy vegetarian pasta bake</a></h2></article>
       <article><h2><a href="/recipe/four">Watercress soup</a></h2></article>
       <article><h2><a href="/recipe/five">Victoria sponge cake</a></h2></article>
       <article><h2><a href="/recipe/six">Gluten free pizza</a></h2></article>
       <article><h2><a href="/recipe/seven">Thai green curry</a></h2></article>
       <article><h2><a href="/recipe/eight">Crema catalana</a></h2></article>
       <article><h2><a href="/recipe/nine">Fiery chili sauce</a></h2></article>
       <article><h2><a href="/recipe/ten">Borscht with pork ribs</a></h2></article>
    </Layout>
  );  
};

export const Head = () => <Seo title="Article Page" />

export default ArticlePage;
