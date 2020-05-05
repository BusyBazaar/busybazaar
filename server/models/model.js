const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');
const {JWT_KEY} = require('../misc/keys.js');
const jwt = require('jsonwebtoken');

const userModel = new Schema({
  username: {type: String, required: [true, 'username is required']},
  password: {type: String, required: [true, 'password is required']},
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  tokens: [{
    token:{
      type:String,
      required:true
    }
  }]
});

const productModel = new Schema({
    name: {type: String, required: [true, 'username is required']},
    description: {type: String, required: [true, 'password is required']},
    country: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    category: {type: String, required: [true, 'password is required']},
    price: {type: String, required: [true, 'password is required']},
    quantity: {type: String, required: [true, 'password is required']},
    postedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  });

userModel.pre('save', async function (next){
  //within this context, 'this' refers to the document about to be saved
  //in our case, it should have properties username and password
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, SALT_WORK_FACTOR)
  }
  next()
  // bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
  //   if (err) return next (err);
  //   //reassign the document's password to its hashed version
  //   this.password = hash;
  //   //this next call makes mongoose move on to the saving the document
  //   return next;
  // })
});

userModel.methods.generateAuthToken = async function(){
  const user = this
  const token = jwt.sign({_id: user._id}, JWT_KEY)
  user.tokens = user.tokens.concat({token})
  await user.save()
  return token
}

const Users = mongoose.model('users', userModel);
const Product = mongoose.model('products', productModel);

module.exports = Users;
module.exports = Product;
