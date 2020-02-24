import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../actions/products';
import { fetchCarousel } from '../actions/carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import withStyles from 'isomorphic-style-loader/withStyles'
import ProductListStyle from '../styles/ProductList.scss';
import ProductElements from '../components/ProductList/ProductElements';
import Carousel from '../components/ProductList/Carousel';
function ProductsList(props) {
  const [products, setProducts] = useState(props.products);
  const [carousel, setCarousel] = useState(props.carousel);
  useEffect(() => {
    if(!products) {
      props.fetchAllProducts();
    }
    console.log('carousel is');
    console.log(carousel);
    if(!carousel.length) {
      console.log('here in carousel---->');
      props.fetchCarousel();
    }
  },[]);
  const getMoreProducts = () => {
    props.fetchAllProducts();
  }
  console.log(carousel);
  return (
    <div>
      <Header/>
      {!!carousel
        && carousel.carousel
        && <Carousel carouselData={carousel.data.carousel}/> }
      {!!products 
        && <ul className={ProductListStyle.container}>
        <ProductElements products ={products}/>
      </ul>}
      <button type="button" onClick={getMoreProducts}>
        Load More
      </button>
      <Footer/>
    </div>
  )
}
function mapStateToProps(state) {
  return { 
    products: state.products.data,
    carousel: state.carousel.data
  }
}
function loadData(store) {
  return Promise.all([
    store.dispatch(fetchAllProducts()),
    //store.dispatch(fetchCarousel())
  ]);
}

export default {
  loadData,
  component: withStyles(ProductListStyle)(connect(mapStateToProps, {fetchAllProducts, fetchCarousel})(ProductsList))
}
