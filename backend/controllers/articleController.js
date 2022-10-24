const Article = require("../models/Article")
const errorHandler = require("../utils/errorHandler")
module.exports.getAllArticles = async (req, res) => {
  console.log(23333)
  try {
    const articles = await Article.find({})
    console.log(articles)
    res.status(200).json(articles)
  } catch (e) {
    errorHandler(res, e)
  }
}
//получить все статьи

module.exports.test = async (req, res) => {
  console.log(req)
  const articles = await Article.find({})
  console.log(11111111)
  console.log(articles)
}


module.exports.create = async (req, res) => {
  try {
    const article = await new Article({
      title: req.body.title,
      category: req.body.category,
      viewCounter: req.body.viewCounter,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userAvatar: req.body.userAvatar,
      description: req.body.description,
      data: req.body.data,
      user: req.body.user,
      name: req.body.name
    }).save()
    res.status(200).json({
          articleAdd: article
        }
    )
  } catch (e) {
    errorHandler(res, e)
  }
} //  создание статьи

module.exports.getByIdArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id)
    res.status(200).json(article)
  } catch (e) {
    errorHandler(res, e)
  }
}
//получить конкретную статью

module.exports.getByIdUser = async (req, res) => {
  try {
    const articles = await Article.find({user: req.user.id})
    res.status(200).json(articles)
  } catch (e) {
    errorHandler(res, e)
  }
}
//статьи определенного user













