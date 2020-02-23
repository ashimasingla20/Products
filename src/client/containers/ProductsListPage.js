import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
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
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  render() {
    return(
      <div>
        <Header/>
        <div>
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
  return { products: state.products }
}
function loadData(store) {
  return store.dispatch(fetchAllProducts())
}

export default {
  loadData,
  component: connect(mapStateToProps, {fetchAllProducts})(ProductsList)
}
