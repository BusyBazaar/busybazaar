const { Products, Users } = require('../models/model.js');

const productController = {
    createProduct: (req, res, next) => {
        const {name, description, country, category, price, url, quantity} = req.body;
        const user = res.locals.user;

          Products.create({
            name: name,
            description: description,
            country: country,
            category: category,
            price: price,
            url: url,
            quantity: quantity,
            postedBy: user._id,
        }, async (err, product) => {
            if(err) next(err);
            res.locals.product = product;
            
            next();
        })
    },

    getProducts: (req, res, next) => {
        Products.find({}, function(err, products){
            if (err){
                res.status(409).send('Cannot find any products');
            } else {
                res.locals.products = products;
                return next();
            }
        })
    }
}

module.exports = productController;