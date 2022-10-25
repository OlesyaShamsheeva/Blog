const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: {
    type: String,
    required:true //обязательное поле
  },
  name: {
    type: String,
    required:true //обязательное поле
  },
  category: {
    type: String,
    required:true //обязательное поле
  },
  viewCounter: {
    type: Number,
    required:true //обязательное поле
  },
  firstName: {
    type: String,
    required:true //обязательное поле
  },
  lastName: {
    type: String,
    required:true //обязательное поле
  },
  userAvatar: {
    type: String,
    default:""
  },
  description:{
    type: String,
    required:true //обязательное поле
  },
  data:{
    type: Date,
    default: Date.now()
  },
  user:{
    ref:"users",
    type: Schema.Types.ObjectId
  },
  userId:{
    type: String,
    required:true
  }
}) // создаем схему


module.exports = mongoose.model("articles_2", articleSchema)