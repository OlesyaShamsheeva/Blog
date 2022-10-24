const express = require("express") //подключаем express в приложение.
const controller = require("../controllers/userController")
const upload = require("../middleware/upload")
const passport = require("passport");
const router = express.Router() //создаю роутер


router.get("/:userId/", passport.authenticate("jwt", {session: false}), controller.getById)
// router.delete('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.removeUser)


//обновление картинок
router.patch('/updateProfile/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.updateProfile)
router.delete('/image/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.removeImage)
//
module.exports = router //экспорт нашего файла наружу