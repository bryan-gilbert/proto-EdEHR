import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  visit: {type: mongoose.Schema.Types.ObjectId, ref: 'Visit'},
  assignmentSeed: {type: Object},
  assignmentData: {type: Object},
  createDate: {type: Date, default: Date.now},
  lastVisitDate: {type: Date, default: Date.now}
})

const VisitData = mongoose.model('VisitData', Schema)

export default VisitData
