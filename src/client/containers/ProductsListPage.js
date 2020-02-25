import React, { useEffect, useState, Component} from 'react';
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
  console.log(carousel);
  useEffect(() => {
    if(!products.data.length) {
      props.fetchAllProducts(1);
    }
    if(!carousel.length) {
      props.fetchCarousel();
    }
  },[]);
  useEffect(() => {
    setProducts(props.products)
  },[props.products])
  useEffect(() => {
    setCarousel(props.carousel)
  },[props.carousel])
  const getMoreProducts = (e, page) => {
    props.fetchAllProducts(page);
  }
  return (
    <div>
      <Header/>
      {!!carousel
        && carousel.carousel
        && <Carousel carouselData={carousel.carousel}/> }
      {!!products 
        && <ul className={ProductListStyle.container}>
        <ProductElements products ={products.data}/>
      </ul>}
      <button 
        type="button" 
        className={ProductListStyle.button}
        onClick={(e) => getMoreProducts(e,products.page)}>
        Load More
      </button>
      <Footer/>
    </div>
  )
}
function mapStateToProps(state) {
  return { 
    products: state.products,
    carousel: state.carousel.data
  }
}
function loadData(store, id='') {
  return Promise.all([
    store.dispatch(fetchAllProducts(1)),
    store.dispatch(fetchCarousel())
  ]);
}

export default {
  loadData,
  component: withStyles(ProductListStyle)(connect(mapStateToProps, {fetchAllProducts, fetchCarousel})(ProductsList))
}
