import mongoose from 'mongoose'
// import uniqueValidator from 'mongoose-unique-validator'

const Schema = new mongoose.Schema({
  user_id: {type: String, require: true},
  toolConsumer: {type: mongoose.Schema.Types.ObjectId, ref: 'Consumer', required: true},
  givenName: { type: String },
  familyName: { type: String },
  emailPrimary: {type: String},
  ltiData: [ { type: String } ],
  currentActivity: {type: mongoose.Schema.Types.ObjectId, ref: 'ActivitySession'},
  asStudentActivities: [{type: mongoose.Schema.Types.ObjectId, ref: 'ActivitySession'}],
  asInstructorActivities: [{type: mongoose.Schema.Types.ObjectId, ref: 'ActivitySession'}],
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

const User = mongoose.model('User', Schema)

export default User
