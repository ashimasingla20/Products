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
  if(req.params['0'].includes('/favicon.ico')) {
    return;
  }
  const store = creatingStore();
  var id = '';
  let context ={};
  console.log('request params are------>')
  console.log(req.params);
  if(req.params && req.params['0'] && req.params['0'].includes('pdp')) {
    console.log(req.params);
    id = req.params['0'].split('/')[2];
  }
  const promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route.loadData 
      ? route.loadData(store, id) 
        .then((data) => {
          console.log('here in load data');
          context = store.getState();
          console.log(context);
          res.send(renderer(req, store, context))
        })
      : null;
  });
})
app.listen(3000, () => {
  console.log('Listening on port 3000');
})
