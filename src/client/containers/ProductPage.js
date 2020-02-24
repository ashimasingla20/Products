import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProductById } from '../actions/product';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorBoundary from '../components/ErrorBoundaries';
import { Link } from 'react-router-dom';
function ProductPage(props) {
  const [product, setProduct] = useState(props.product);
  useEffect(() => {
    props.fetchProductById()
  },[])

  if(!product) return null;
  return (
    <div>
    <Header/>
    <div>
      Here's a ProductPage:
    </div>
    <div>
      <ErrorBoundary>
        {product.productInfo.name}
      </ErrorBoundary>
    </div>
    <Footer/>
  </div>
  )
}
function mapStateToProps(state) {
  return { product: state.product }
}
function loadData(store) {
  return store.dispatch(fetchProductById())
}
export default {
  loadData,
  component: connect(mapStateToProps, {fetchProductById})(ProductPage)
}
