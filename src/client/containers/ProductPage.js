import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProductById } from '../actions/product';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorBoundary from '../components/ErrorBoundaries';
import { Link } from 'react-router-dom';
//import useStyles from 'isomorphic-style-loader/useStyles'
import withStyles from 'isomorphic-style-loader/withStyles'
import ProductStyles from '../styles/Product.scss';
import classNames from 'classnames';
import { MdStar, MdStarBorder} from 'react-icons/md';
function ProductPage(props) {
  const [product, setProduct] = useState(props.product);
  useEffect(() => {
    props.fetchProductById()
  },[])
  console.log(product);
  if(!product) return null;
  const { productInfo } = product;
  return (
    <div>
    <Header/>
      <div className={ProductStyles.container}>
        <div className={ProductStyles.imagebox}>
          <ErrorBoundary>
            <img 
              className={ProductStyles.image}
              src={productInfo.img} 
              alt={productInfo.name}/>
          </ErrorBoundary>
        </div>
        <ErrorBoundary>
          <div>
            <div className={ProductStyles.block}>
              <p className={ProductStyles.head}>Product Info</p>
              <p className={ProductStyles.value}>{productInfo.name} </p>
            </div>
            <div className={ProductStyles.block}>
              <p className={ProductStyles.head}>Rating</p>
              <p className={ProductStyles.value}>{productInfo.rating}</p>
            </div>
            <div className={ProductStyles.block}>
              <p className={ProductStyles.head}>Description</p>
              <div className={classNames(ProductStyles.value, ProductStyles.description)} >
                {productInfo.description}
              </div>
            </div>
          </div>
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
  component: withStyles(ProductStyles)(connect(mapStateToProps, {fetchProductById})(ProductPage))
}
