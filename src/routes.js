const express = require('express');
const routes = express.Router();

// const express = require('express');
// const routes = express.Router();

// Controllers import 
const ItemController = require('./controllers/ItemController');


// DEFAULT ROUTE
routes.get('/', (req, res) => { return res.json({ status: 'OK' }) });

// GET
routes.get('/items', ItemController.index);
routes.get('/items/:title', ItemController.show);

// POST
routes.post('/items', ItemController.create);

// PUT
routes.put('/items/:id', ItemController.update);

// DELETE
routes.delete('/items/:id', ItemController.destroy);


// Export and expose Routes
module.exports = routes;