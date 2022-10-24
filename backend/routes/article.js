const express = require("express");
const controller = require("../controllers/articleController")
const passport = require('passport')
const router = express.Router()

router.get('/:articleId', passport.authenticate("jwt", {session: false}), controller.getByIdArticle)
router.get('/allArticles', passport.authenticate("jwt", {session: false}), controller.getAllArticles)
router.post('/addArticle', passport.authenticate("jwt", {session: false}), controller.create)
router.get('/:userId', passport.authenticate("jwt", {session: false}), controller.getByIdUser)
router.get('/test', passport.authenticate("jwt", {session: false}), controller.test)


module.exports = router