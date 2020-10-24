const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate'); // To use paginations
const Joi = require('joi'); // VALIDATION LIBRARY


const ItemSchemeValidate = new Joi.object({
    title: Joi.string()
        .min(3)
        .max(30)
        .required(),
    price: Joi.number(),
    currency: Joi.string()
        .alphanum()
        .min(3)
        .max(3),
    siteUrls: Joi.array().items(Joi.string().uri()),
    imageUrl: Joi.string().uri(),
    description: Joi.string()
        .max(300)

});

const ItemScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: false,
    },
    currency: {
        type: String,
        required: false
    },
    siteUrls: {
        type: [String],
        required: false
    },
    description: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    }
});


// (Add plugin) Create pagination
ItemScheme.plugin(mongoosePaginate);

// Export and expose database to mongoDB trough mongoose
mongoose.model('Item', ItemScheme);

// Export and expose schema
module.exports = ItemSchemeValidate;