import mongoose from 'mongoose'
// import uniqueValidator from 'mongoose-unique-validator'

const UserSchema = new mongoose.Schema({
  givenName: { type: String },
  familyName: { type: String },
  emailPrimary: { type: String},
  ltiUserId: {type: String},
  ltiConsumerKey: {type: String},
  ltiData: [ { type: String } ],
  activites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}],
  createDate: {
    type: Date,
    default: Date.now
  },
  lastVisitDate: {
    type: Date,
    default: Date.now
  }
})
// UserSchema.plugin(uniqueValidator)

const User = mongoose.model('User', UserSchema)

export default User
