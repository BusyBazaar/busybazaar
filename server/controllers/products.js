const { Products, Users } = require('../models/model.js');

const productController = {
    createProduct: (req, res, next) => {
        const {name, description, country, category, price, quantity} = req.body;
        const user = res.locals.user;

        Users.findOne({ username: user }, (err, data) => {
          if(err) next(err);

          console.log(data);

          let newProduct = new Products({ 
            name: name, 
            description: description, 
            country: country, 
            category: category,
            price: price,
            quantity: quantity,
            postedBy: data._id
          })

          data.products.push(newProduct); 
          Products.save(newProduct);
          next();
        })
        


        // Products.create({
        //     name: name,
        //     description: description,
        //     country: country,
        //     category: category,
        //     price: price,
        //     quantity: quantity,
        //     postedBy: user,
        // }, async (err, product) => {
        //     if(err) next(err);
        //     res.locals.product = product;
        //     next();
        // }
        // ),
        // Users.update({
            
        // })
    }
}

module.exports = productController;