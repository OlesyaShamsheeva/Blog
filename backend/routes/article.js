const express = require("express");
const controller = require("../controllers/articleController")
const passport = require('passport')
const router = express.Router()
router.get('/:userId', passport.authenticate("jwt", {session: false}), controller.getByIdUser)
router.get('/allArticles', passport.authenticate("jwt", {session: false}), controller.getAllArticles)
router.get('/:articleId', passport.authenticate("jwt", {session: false}), controller.getByIdArticle)

router.post('/addArticle', passport.authenticate("jwt", {session: false}), controller.create)

router.patch('/:articleId', passport.authenticate("jwt", {session: false}), controller.updateArticle)
module.exports = router