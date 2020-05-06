const jwt = require('jsonwebtoken')
const { Users } = require('../models/model.js')
//destructuring to get value at that key

const sessionController = {};

//checks if token is being passed in the current request, and if yes, fetch the associated user
//of that token and place the user in that request
//next is called because this is middleware that needs to be passed to the next middleware
sessionController.authenticate = async (req, res, next) =>{
//get value of the Authorization key in the header
//Authorization: Bearer XXXXXXXXXXX
//where XXXXXX is the JWT token
//replacing Bearer string with nothing, so we just get the token
console.log('AT AUTHENTICATE')
try {
        const token = req.header('Authorization').replace('Bearer ','');
        //will turn the string (in model.js) back into an object
        const data = jwt.verify(token, process.env.SECRET_KEY)
        const user = await Users.findOne({_id: data._id, 'tokens.token': token})
        if (!user){
            throw new Error()
        }
        //next middleware will want access to user and token
        res.locals.user = user
        res.locals.token = token

        next()
    } catch (error) {
        console.log(error);
        res.status(401).send({error: 'Not authorized to access this resource'})
    }
}

module.exports = sessionController;