import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
export const ProductElements = (props) =>  {
  return props.products.map((product, index) => <li key={index}>{product.name}</li>);
}

class ProductsList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return(
      <div>
        <div>
          Here's a big list of users:
        </div>
        <ul>
          <ProductElements products ={this.props.products}/>
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { products: state.products }
}
function loadData(store) {
  return store.dispatch(fetchProducts())
}
//export { loadData };
export default {
  loadData,
  component: connect(mapStateToProps, {fetchProducts})(ProductsList)
}
