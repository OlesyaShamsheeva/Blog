const Article = require('../models/Article')
const User = require('../models/User');
const errorHandler = require('../utils/errorHandler')

module.exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find({})
    res.status(200).json(articles)
  } catch (e) {
    errorHandler(res, e)
  }
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
      name: req.body.name,
      userId: req.body.userId,
      imgArticle: req.body.imgArticle
    }).save()
    res.status(200).json({
      articleAdd: article
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getByIdArticle = async (req, res) => {
  console.log(2313)
  try {
    const article = await Article.findById(req.params.articleId)
    res.status(200).json(article)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getByIdUser = async (req, res) => {
  try {
    const articles = await Article.find({ userId: req.user._id })
    res.status(200).json(articles)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.updateArticle = async function (req, res) {
  const updatedArticle = {
    title: req.body.title,
    category: req.body.category,
    viewCounter: req.body.viewCounter,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userAvatar: req.body.userAvatar,
    description: req.body.description,
    data: req.body.data,
    user: req.body.user,
    name: req.body.name,
  }
  try {
    const article = await Article.findOneAndUpdate(
      { _id: req.params.articleId },
      { $set: updatedArticle },
    )
    res.status(200).json(article)
  } catch (e) {
    errorHandler(res, e)
  }
}


module.exports.removeImageArt= async function(req, res) {
  try {
    await Article.remove({ imgArticle: req.params.imgArticle})
    res.status(200).json({
      message: 'фото  было удалено.'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}






