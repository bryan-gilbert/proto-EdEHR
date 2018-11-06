import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  consumer: {type: mongoose.Schema.Types.ObjectId, ref: 'Consumer', required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  activity: {type: mongoose.Schema.Types.ObjectId, ref: 'Activity', required: true},
  launch_presentation_return_url: {type: String},
  isStudent: {type: Boolean, default: false},
  isInstructor: {type: Boolean, default: false},
  sessionData: {type: String}, // JSON.stringify 'd  data
  createDate: {
    type: Date,
    default: Date.now
  }
})

const ActivitySession = mongoose.model('ActivitySession', Schema)

export default ActivitySession
