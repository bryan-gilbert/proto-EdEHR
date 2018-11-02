const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  givenName: { type: String },
  familyName: { type: String },
  ltiData: [ String ],
  createDate: {
    type: Date,
    default: Date.now
  },
  lastVisitDate: {
    type: Date,
    default: Date.now
  }
})
const User = mongoose.model('user', UserSchema)
module.exports = User
