import React, { useEffect, useState, Component} from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../actions/products';
import { fetchCarousel } from '../actions/carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import withStyles from 'isomorphic-style-loader/withStyles'
import ProductListStyle from '../styles/ProductList.scss';
import ProductElements from '../components/ProductList/ProductElements';
import Carousel from '../components/ProductList/Carousel';
class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state= {
      products: this.props.products.data,
      carousel: this.props.carousel,
      loadProducts: this.props.products.data.length ? false : true,
      loadCarousel: this.props.carousel.length ? false : true
    }
    this.getMoreProducts = this.getMoreProducts.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    // console.log(props.products);
    // console.log(state.products);
    // console.log(props.carousel);
    // console.log(state.carousel);
    // if(state.products && state.products.length && state.carousel && state.carousel.length) {
    //   return null
    // } else {
    //   return {
    //     loadProducts: state.products.data.length ? false : true,
    //     loadCarousel: state.carousel.length ? false : true
    //   }
    // }
    return null;
  }
  componentDidMount() {
    // console.log('state is');
    // console.log(this.state);
    // if(!this.state.loadProducts) {
    //   this.props.fetchAllProducts(1)
    //     .then(() => {
    //       this.setState({
    //         loadProducts: false
    //       })
    //     })
    // }
    // if(!this.state.loadCarousel) {
    //   console.log('going here');
    //   this.props.fetchCarousel()
    //     .then(() => {
    //       this.setState({
    //         loadCarousel: false
    //       })
    //     })
    // }
  }
  componentDidUpdate() {
    // console.log('here in component did update');
    // console.log('loadCaousel is');
    // console.log(this.state.loadCarousel);
    // if(!this.state.loadProducts) {
    //   this.props.fetchAllProducts()
    // }
    // if(!this.state.loadCarousel) {
    //   this.props.fetchCarousel();
    // }
  }

  getMoreProducts(e, page){
    this.props.fetchAllProducts(page)
  }

  render() {
    const {carousel, products} = this.props;
    console.log(carousel);
    console.log(products);
    return (
      <div>
        <Header/>
        {!!carousel
          && carousel.carousel
          && <Carousel carouselData={carousel.carousel}/> }
        {!!products 
          && <ul className={ProductListStyle.container}>
          <ProductElements products ={products.data}/>
        </ul>}
        <button 
          type="button" 
          className={ProductListStyle.button}
          onClick={(e) => this.getMoreProducts(e, products.page)} >
          <span className={ProductListStyle.text}> Load More </span>
        </button>
        <Footer/>
      </div>
    )
  }
} 
// function ProductsList(props) {
//   const [products, setProducts] = useState(props.products);
//   const [carousel, setCarousel] = useState(props.carousel);
//   useEffect(() => {
//     if(!products) {
//       props.fetchAllProducts();
//     }
//     console.log('carousel is');
//     console.log(carousel);
//     if(!carousel.length) {
//       console.log('here in carousel---->');
//       props.fetchCarousel();
//     }
//   },[]);
//   const getMoreProducts = () => {
//     props.fetchAllProducts();
//   }
//   console.log(carousel);
//   return (
//     <div>
//       <Header/>
//       {!!carousel
//         && carousel.carousel
//         && <Carousel carouselData={carousel.data.carousel}/> }
//       {!!products 
//         && <ul className={ProductListStyle.container}>
//         <ProductElements products ={products}/>
//       </ul>}
//       <button type="button" onClick={getMoreProducts}>
//         Load More
//       </button>
//       <Footer/>
//     </div>
//   )
// }
function mapStateToProps(state) {
  return { 
    products: state.products,
    carousel: state.carousel.data
  }
}
function loadData(store) {
  return Promise.all([
    store.dispatch(fetchAllProducts(1)),
    store.dispatch(fetchCarousel())
  ]);
}

export default {
  loadData,
  component: withStyles(ProductListStyle)(connect(mapStateToProps, {fetchAllProducts, fetchCarousel})(ProductsList))
}
