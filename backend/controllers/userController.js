const User = require("../models/User")
const errorHandler = require("../utils/errorHandler");
const Article = require("../models/Article");
//получить конкретного юзера
module.exports.getById = async (req, res) => {
  try {
    const users = await User.find({
      _id: req.user._id
    })
    res.status(200).json(users[0])
  } catch (e) {
    errorHandler(res, e)
  }
}
//удаление пользователя
module.exports.removeUser = async function(req, res) {
  try {
    await User.remove({_id: req.params.id})
    res.status(200).json({
      message: 'Пользователь был удален.'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}
//изменение профиля
module.exports.updateProfile = async function(req, res) {
  const updated = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    avatar: req.file ? req.file.path : '',
    description: req.body.description
  }

  try {
    const user = await User.findOneAndUpdate(
        {id: req.params._id},
        {$set: updated},
    )
    res.status(200).json(user)
  } catch (e) {
    errorHandler(res, e)
  }
}




















//удалить фотографию
module.exports.removeImage = async function(req, res) {
  try {
    await User.remove({avatar: req.params.avatar})
    res.status(200).json({
      message: 'аватар был удален.'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}




