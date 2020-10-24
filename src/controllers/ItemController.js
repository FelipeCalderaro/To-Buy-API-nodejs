const mongoose = require('mongoose');
const Item = mongoose.model('Item')


const ItemSchemeValidate = require('../models/Item');

// export functions
module.exports = {
    // FOR GET METHODS
    async index (req, res) {
        console.log(`[${req.method}] << ${new Date()} >> ${req.originalUrl} from ${req.hostname}`)
        // const { page } stands for deconstruct method in JS
        const { page = 1, perPage = 10 } = req.query;
        // configure pagination, page is the page itself, limit is the limit of objects in the page
        // the first {} is to use filters, like: where x == 1 
        const item = await Item.paginate({}, { page, limit: Number.parseInt(perPage) });
        return res.json(item);
    },
    // FOR GET METHODS WITH EXCLUSIVE ID
    async show (req, res) {
        console.log(`[${req.method}] << ${new Date()} >> ${req.originalUrl} from ${req.hostname}`)
        const item = await Item.findById(req.params.id);
        return res.json(item);
    },
    // FOR POST METHODS
    async create (req, res) {
        console.log(`[${req.method}] << ${new Date()} >> ${req.originalUrl} from ${req.hostname}`)
        try {
            // 'validate' function from Joi  
            const value = await ItemSchemeValidate.validate(req.body);
            if (value.error != undefined) {
                res.status(202).json({ errors: value.error.details });
            } else {
                const item = await Item.create(req.body);
                res.status(201).json(item);
            }
        } catch (e) {
            console.log(e);
            return res.send('Err!!');
        }
    },

    // FOR PUT METHODS
    async update (req, res) {
        console.log(`[${req.method}] << ${new Date()} >> ${req.originalUrl} from ${req.hostname}`)
        try {
            const value = await ItemSchemeValidate.validate(req.body);
            if (value.error != undefined) {
                res.json({ errors: value.error.details });
            } else {
                const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
                res.json(item);
            }
        } catch (e) {
            console.log(e);
            return res.send('Err!!');
        }
    },
    // FOR DELETE METHODS
    async destroy (req, res) {
        console.log(`[${req.method}] << ${new Date()} >> ${req.originalUrl} from ${req.hostname}`)
        const item = await Item.findByIdAndRemove(req.params.id);
        //  Status 202 for request accepted and added to queue
        return res.sendStatus(202);
    }

}