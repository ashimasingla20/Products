import express from 'express';
import renderer from './helpers/renderer';
import creatingStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
// import './client/App.scss';

//const path = require('path');
const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = creatingStore();
  const promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null;
  });
  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  });
  //res.send(renderer(req, store));
})
app.listen(3000, () => {
  console.log('Listening on port 3000');
})
