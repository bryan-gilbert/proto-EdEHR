import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  toolConsumer: {type: mongoose.Schema.Types.ObjectId, ref: 'Consumer', required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  activity: {type: mongoose.Schema.Types.ObjectId, ref: 'Activity', required: true},
  lti_roles: {type: String},
  launch_presentation_return_url: {type: String},
  isStudent: {type: Boolean, default: false},
  isInstructor: {type: Boolean, default: false},
  sessionData: {type: Object},
  createDate: {type: Date, default: Date.now},
  lastVisitDate: {type: Date, default: Date.now}
})

const Visit = mongoose.model('Visit', Schema)

export default Visit
