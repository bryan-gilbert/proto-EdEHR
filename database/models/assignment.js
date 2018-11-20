import mongoose from 'mongoose'
/*
 */

const Schema = new mongoose.Schema({
  external_id: {type: String},
  name: { type: String },
  ehrRoute: { type: String },
  seedData: {type: Object},
  createDate: {type: Date, default: Date.now},
  lastVisitDate: {type: Date, default: Date.now}
})

const Assignment = mongoose.model('Assignment', Schema)

export default Assignment
