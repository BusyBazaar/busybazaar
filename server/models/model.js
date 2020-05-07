const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userModel = new Schema({
  username: {type: String, required: [true, 'username is required']},
  password: {type: String, required: [true, 'password is required']},
  tokens: [{
    token:{
      type:String,
      required:true
    }
  }],
});

const productModel = new Schema({
    name: {type: String, required: [true, 'name is required']},
    description: {type: String, required: [true, 'description is required']},
    country: {type: String, required: [true, 'country is required']},
    category: {type: String, required: [true, 'category is required']},
    price: {type: Number, required: [true, 'price is required']},
    url: {type: String, required: [true, 'url is required']},
    postedBy: [{ type: Schema.Types.ObjectId, ref: 'users' }],
});

userModel.pre('save', async function (next){
  //within this context, 'this' refers to the document about to be saved
  //in our case, it should have properties username and password
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, SALT_WORK_FACTOR)
  }

  return next();
});

userModel.methods.generateAuthToken = async function(){
  const user = this;
  const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY);
  user.tokens = user.tokens.concat({token});
  await user.save();
  return token;
}

const Users = mongoose.model('users', userModel);
const Products = mongoose.model('products', productModel);

module.exports = { Users: Users, Products: Products };
//module.exports = Products;