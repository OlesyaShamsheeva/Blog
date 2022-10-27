// // const path = require('path')
// app.use(express.static('./public'));
// // app.use(express.static(path.join(__dirname, 'uploads')))
// app.use(require("cors")("dev"))//на другом локалхосте,но можем взаимодействовать с нашим сервером

const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const articleRoutes = require("./routes/article")
const userRoutes = require("./routes/user")
const keys = require('./config/keys')
const app = express()
mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())
app.use("/api/auth", authRoutes) //метод который добавляет роуты плагины и прочее.    будет адрес после /api/auth/login
app.use("/api/article", articleRoutes)
app.use("/api/user", userRoutes)
module.exports = app


