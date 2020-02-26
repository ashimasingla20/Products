import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProductById,resetFetchProduct } from '../actions/product';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorBoundary from '../components/ErrorBoundaries';
import withStyles from 'isomorphic-style-loader/withStyles'
import ProductStyles from '../styles/Product.scss';
import classNames from 'classnames';
import { FaArrowLeft } from "react-icons/fa";
import { IoMdStarOutline,IoIosStar } from "react-icons/io";
import useSSR from 'use-ssr';
const Rating = ({rating}) => {
	const totalStars = 5;
	return (<div className={ProductStyles.stars}>
		{[...Array(totalStars)].map((ele, i) => ( 
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
	const { match: { params: {id} } } = props;
  	const [product, setProduct] = useState(props.product);
  	let { isBrowser, isServer } = useSSR();
  	if(isServer){
		useEffect(() => {
			setProduct(props.staticContext.product);
			return () => props.resetFetchProduct()
		}, [props.staticContext.product])
  	}
	if(isBrowser) {
		useEffect(() => {
			const browserData = window.INITIAL_STATE;
			setProduct(browserData.product);
		}, []);
	}
	useEffect(() => {
		if(!product.productInfo 
		|| (product.productInfo && id!= product.productInfo.id)) {
			props.fetchProductById(id)
		}
	}, [])
	const { productInfo } = product;
	if(!product || !productInfo) return null;
	return (<div>
		<Header/>
		<div className={ProductStyles.container}>
			<div className={ProductStyles.imagebox}>
				<a href="/products" className={ProductStyles.back}>
					<FaArrowLeft size={25} className={ProductStyles.icon}/>
				</a>
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
	return store.dispatch(fetchProductById(id))
}
export default {
	loadData,
	component: withStyles(ProductStyles)(connect(mapStateToProps, {fetchProductById, resetFetchProduct})(ProductPage))
}
