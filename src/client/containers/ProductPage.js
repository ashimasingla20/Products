import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
class ProductPage extends Component {
  componentDidMount() {
    this.props.fetchSingleProduct();
  }
  render() {
    let { currentProduct } = this.props;
    return(
      <div>
        <Header/>
        <div>
          Here's a ProductPage:
        </div>
        <div>
          {currentProduct.name}
        </div>
        <Footer/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log('getting data');
  return { currentProduct: state.products.currentProduct }
}
function loadData(store) {
  return store.dispatch(fetchSingleProduct())
}
export default {
  loadData,
  component: connect(mapStateToProps, {fetchSingleProduct})(ProductPage)
}
