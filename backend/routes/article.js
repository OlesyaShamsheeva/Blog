const express = require("express");
const controller = require("../controllers/articleController")
const passport = require('passport')
const router = express.Router()

router.post('/addArticle', passport.authenticate("jwt", {session: false}), controller.create)
router.get('/2/:userId', passport.authenticate("jwt", {session: false}), controller.getByIdUser)
router.get('/1/:articleId', passport.authenticate("jwt", {session: false}), controller.getByIdArticle)
router.get('/allArticles', passport.authenticate("jwt", {session: false}), controller.getAllArticles)

router.patch('/:articleId', passport.authenticate("jwt", {session: false}), controller.updateArticle)
module.exports = router