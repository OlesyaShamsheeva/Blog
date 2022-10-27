const User = require("../models/User")
const errorHandler = require("../utils/errorHandler");
//получить конкретного юзера
module.exports.getById = async (req, res) => {
  console.log(req.params)
  try {
    const users = await User.findOne({
      _id: req.params.userId
    })
    res.status(200).json(users)
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
    description:req.body.description,
    avatar: req.body.avatar,
  }
  try {
    const user = await User.findOneAndUpdate(
        {emailAddress: req.body.emailAddress},
        {$set: updated},
        {new: true}
    )
    console.log(user)
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




