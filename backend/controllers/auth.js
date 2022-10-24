const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler=require("../utils/errorHandler")
module.exports.authorization = async function (req, res) {
  console.log(req)
  const candidate = await User.findOne({emailAddress: req.body.emailAddress})
  if (candidate) {
    // Проверка пароля, пользователь существует
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if (passwordResult) {
      // Генерация токена, пароли совпали
      const token = jwt.sign({
        emailAddress: candidate.emailAddress,
        userId: candidate._id,
      }, keys.jwt, {expiresIn: 60 * 60})
      res.status(200).json({
        token: `Bearer ${token}`
      })
    } else {
      // Пароли не совпали
      res.status(401).json({
        message: 'Пароли не совпадают. Попробуйте снова.'
      })
    }
  }
  else {
    // Пользователя нет, ошибка
    res.status(404).json({
      message: 'Пользователь с таким email не найден.'
    })
  }
}
module.exports.registration = async (req, res) => {
  const candidate = await User.findOne({emailAddress: req.body.emailAddress})
  if (candidate) {
    res.status(409).json({message: "Такой email уже занят.Попробуйте другой"}) //статусы ищем в поисковике http status
  } else {
    const salt = bcrypt.genSaltSync(10) //сгенерировать шифрование
    const password = req.body.password
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
      password: bcrypt.hashSync(password, salt)//создать хэш нашего пароля
    })
    try {
      await user.save()
      res.status(201).json(user)
    } catch (e) {
      errorHandler(res,e)
    }
  }
}
//req-получить данные от клиента





