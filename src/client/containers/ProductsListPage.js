import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../actions/products';
import { fetchCarousel } from '../actions/carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import withStyles from 'isomorphic-style-loader/withStyles'
import s from '../styles/Product.scss';
import ProductElements from '../components/ProductList/ProductElements'
function ProductsList(props) {
  const [products, setProducts] = useState(props.products);
  useEffect(() => {
    props.fetchAllProducts();
    props.fetchCarousel();
  },[]);
  return (
    <div className={s.container}>
      <Header/>
      <div>
        Here's a big list of users:
      </div>
      <ul>
        <ProductElements products ={products}/>
      </ul>
      <Footer/>
    </div>
  )
}
function mapStateToProps(state) {
  return { 
    products: state.products.data,
    carousel: state.carousel 
  }
}
function loadData(store) {
  return Promise.all([
    store.dispatch(fetchAllProducts()),
    store.dispatch(fetchCarousel())
  ]);
}

export default {
  loadData,
  component: withStyles(s)(connect(mapStateToProps, {fetchAllProducts, fetchCarousel})(ProductsList))
}
