const express = require("express") //подключаем express в приложение.
const controller=require("../controllers/auth")
const router = express.Router() //создаю роутер

router.post("/authorization", controller.authorization) //req-клиент отправляет запрос ,res-ответ сервера. вызываем логин из контроллера.
router.post("/registration", controller.registration) //req-клиент отправляет запрос ,res-ответ сервера. вызываем логин из контроллера.


module.exports = router //экспорт нашего файла наружу
