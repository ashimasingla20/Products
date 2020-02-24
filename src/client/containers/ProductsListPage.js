import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../actions/products';
import { fetchCarousel } from '../actions/carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/withStyles'
import s from '../styles/Product.scss';
export const ProductElements = (props) =>  {
  return props.products.map((product, index) => <li key={index}>
    <Link to={`/pdp/${product.id}`}>
      <img src={product.img} alt={`${product.name}`}/>
    </Link>
    <Link to={`/pdp/${product.id}`}>
      {product.name}
    </Link>
    </li>);
}

class ProductsList extends Component {
  constructor(props) {
    super(props);
    console.log('here in constructor');
  }
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllProducts();
    this.props.fetchCarousel();
  }
  render() {
    return(
      <div className={s.container}>
        <Header/>
        <div className={`{s.root}`}>
          Here's a big list of users:
        </div>
        <ul>
          <ProductElements products ={this.props.products}/>
        </ul>
        <Footer/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { products: state.products.data }
}
function loadData(store) {
  return store.dispatch(fetchAllProducts())
}

export default {
  loadData,
  component: withStyles(s)(connect(mapStateToProps, {fetchAllProducts, fetchCarousel})(ProductsList))
}
