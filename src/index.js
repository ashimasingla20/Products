import express from 'express';
import renderer from './helpers/renderer';
import creatingStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
const path = require('path');
// import './client/App.scss';
//const path = require('path');
const app = express();
//app.use(express.static(path.join(__dirname, 'public/')));
app.use(express.static('public/'));
app.get('*', (req, res) => {
  const store = creatingStore();
  var id = '';
  if(req.params && req.params['0'] && req.params['0'].includes('pdp')) {
    console.log('request param id');
    id = req.params['0'].split('/')[2];
    console.log(id);
  }
  const promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store, id) : null;
  });
  //console.log('promise is ----->')
  console.log(promises);
  // promises.map((promise) => {
  //   promise.then((data) => {
  //     console.log('here is data we get');
  //     console.log(data);
  //   })
  // })
  Promise.all(promises).then((data) => {
    console.log('data returned is');
    console.log(data);
    console.log("store get state");
    console.log(store.getState());
    res.send(renderer(req, store))
  });
  //res.send(renderer(req, store));
})
app.listen(3000, () => {
  console.log('Listening on port 3000');
})
