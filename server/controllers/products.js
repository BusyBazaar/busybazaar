const { Products, Users } = require('../models/model.js');

const productController = {
    createProduct: (req, res, next) => {
        const {name, description, country, category, price, quantity} = req.body;
        const user = res.locals.user;

          Products.create({
            name: name,
            description: description,
            country: country,
            category: category,
            price: price,
            quantity: quantity,
            postedBy: user._id,
        }, async (err, product) => {
            if(err) next(err);
            res.locals.product = product;
            console.log(product);
            next();
        })
    }
}

module.exports = productController;