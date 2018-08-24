const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

mongoose.connect(process.env.DB_URL)

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  hash: {
    type: String,
    required: true
  }
})

UserSchema.plugin(uniqueValidator)

const User = mongoose.model('User', UserSchema)

module.exports = User
