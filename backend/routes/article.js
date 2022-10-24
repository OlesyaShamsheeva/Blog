const express = require("express");
const controller=require("../controllers/articleController")
const passport=require('passport')
const router = express.Router()

router.get('/:articleId', passport.authenticate("jwt",{session:false}),controller.getByArticleId)
router.get('/allArticles', passport.authenticate("jwt",{session:false}), controller.getAllArticles)
router.post('/addArticle', passport.authenticate("jwt",{session:false}),controller.create)
router.get('/:id', passport.authenticate("jwt",{session:false}),controller.getById)



module.exports = router