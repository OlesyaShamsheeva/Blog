const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {
    type: String,
    required:true //обязательное поле
  },
  lastName: {
    type: String,
    required:true //обязательное поле
  },
  avatar: {
    type: String,
    default:""
  },
  emailAddress:{
    type: String,
    required:true,
    unique:true //если такой в базе есть то его находит
  },
  password:{
    type: String,
    required:true
  },
  userId:{
    ref:"users",
    type: Schema.Types.ObjectId
  },
  description:{
    type: String,
    default:""
  },
  name:{
    type: String,
    default:""
  }

}) // создаем схему


module.exports = mongoose.model("users", userSchema)