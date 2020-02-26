import express from 'express';
import renderer from './helpers/renderer';
import creatingStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
const path = require('path');
const app = express();
app.use(express.static('public/'));
app.get('*', (req, res) => {
	if(req.params['0'].includes('/favicon.ico')) {
		return;
	}
	const store = creatingStore();
	var id = '';
	let context = {};
	if(req.params && req.params['0'] && req.params['0'].includes('pdp')) {
		id = req.params['0'].split('/')[2];
	}
	const promises = matchRoutes(Routes, req.path).map(({route}) => {
		return route.loadData 
			? route.loadData(store, id) 
			.then((data) => {
				context = store.getState();
				res.send(renderer(req, store, context))
			})
			: null;
	});
})
app.listen(3000, () => {
  console.log('Listening on port 3000');
})
