import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts, resetFetchAllProducts } from '../actions/products';
import { fetchCarousel, resetCarousel } from '../actions/carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import withStyles from 'isomorphic-style-loader/withStyles'
import ProductListStyle from '../styles/ProductList.scss';
import ProductElements from '../components/ProductList/ProductElements';
import Carousel from '../components/ProductList/Carousel';
import useSSR from 'use-ssr';
function ProductsList(props) {
  const [products, setProducts] = useState(props.products);
  const [carousel, setCarousel] = useState(props.carousel);
  let { isBrowser, isServer } = useSSR();
  if(isBrowser) {
    setTimeout(() =>{
      const browserData = window.INITIAL_STATE;
      setProducts(browserData.products);
      setCarousel(browserData.carousel);
    },0);
  }
  if(isServer){
    useEffect(() => {
      setProducts(props.staticContext.products);
      return () => props.resetFetchAllProducts()
    },[props.staticContext.products ])
    useEffect(() => {
      setCarousel(props.staticContext.carousel);
      return () => props.resetCarousel()
    },[props.staticContext.carousel ])
  }
  //fallback for ssr only fetch if not ssr data available
  useEffect(() => {
    if(!products.data.length) {
      props.fetchAllProducts(1);
    }
    if(!carousel.data || (!carousel.data.carousel && !carousel.data.carousel.length)) {
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
      {!!carousel.data
        && carousel.data.carousel
        && <Carousel carouselData={carousel.data.carousel}/> }
      {!!products 
        && <ul className={ProductListStyle.container}>
        <ProductElements products ={products.data}/>
      </ul>}
      <button 
        type="button" 
        className={ProductListStyle.button}
        onClick={(e) => getMoreProducts(e, products.page)}>
        Load More
      </button>
      <Footer/>
    </div>
  )
}
function mapStateToProps(state) {
  return { 
    products: state.products,
    carousel: state.carousel
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
  component: withStyles(ProductListStyle)(connect(mapStateToProps, 
      {fetchAllProducts, 
        fetchCarousel,
        resetFetchAllProducts,
        resetCarousel
      })(ProductsList))
}
