import ProductsListPage from './containers/ProductsListPage';
import ProductPage from './containers/ProductPage';
const routesArr = [
  {
    ...ProductsListPage,
    path: '/',
    exact: true
  },
  {
    ...ProductsListPage,
    path: '/products'
  },
  {
    ...ProductPage,
    path: '/pdp/:id'
  }
]
export default routesArr;
