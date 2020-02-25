import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProductById } from '../actions/product';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorBoundary from '../components/ErrorBoundaries';
import { Link, BrowserRouter } from 'react-router-dom';
import  { Redirect } from 'react-router-dom'
import withStyles from 'isomorphic-style-loader/withStyles'
import ProductStyles from '../styles/Product.scss';
import classNames from 'classnames';
import { FaArrowLeft } from "react-icons/fa";
import { IoMdStarOutline,IoIosStar } from "react-icons/io";
const Rating = ({rating}) => {
  const totalStars = 5;
  return (<div className={ProductStyles.stars}>
    {[...Array(totalStars)].map((n, i) => ( 
        i <rating 
          ? <IoIosStar
            size={25}
            key={`star-${i}`}/>
          : <IoMdStarOutline 
            size={25}
            key={`star-${i}`}/> 
      ))}
  </div>)
}
function ProductPage(props) {
  const [product, setProduct] = useState(props.product);
  // const id = this.props.match.params.id;
  useEffect(() => {
    props.fetchProductById(1)
  },[])
  useEffect(() => {
    setProduct(props.product)
  },[props.product])
  const { productInfo } = product;
  console.log(product);
  if(!product || !productInfo) return null;
  console.log('product info is');
  console.log(productInfo);
  const setRedirect = () => {
    console.log('here in redirect');
    props.history.push(`/products`);
    //return <Redirect to='/products' />
  }
  return (
    <div>
    <Header/>
      <div className={ProductStyles.container}>
        <div className={ProductStyles.imagebox}>
          <span className={ProductStyles.back} onClick={setRedirect}>
            <FaArrowLeft size={25} className={ProductStyles.icon}/>
            
          </span>
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
              {/* <p className={ProductStyles.value}>{productInfo.rating}</p> */}
              <div className={ProductStyles.ratingcontainer}>
                <Rating rating={productInfo.rating}/>
              </div>
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
function loadData(store, id='') {
  console.log('id in load data');
  console.log(id);
  return store.dispatch(fetchProductById(id))
}
export default {
  component: withStyles(ProductStyles)(connect(mapStateToProps, {fetchProductById})(ProductPage))
}
