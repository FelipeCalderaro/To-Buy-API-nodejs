const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
// Server configuration
app.use(express.json());
app.use(cors());
app.listen(34939, '192.168.0.18')
// -------------------
// DB Configuration
mongoose.connect('mongodb://localhost:27017/toby',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);


// 
// Models imports
requireDir('./src/models');

// Default routing system
app.use('/', require('./src/routes'));


