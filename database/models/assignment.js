import mongoose from 'mongoose'
/*
 */

const Schema = new mongoose.Schema({
  externalId: {type: String},
  name: { type: String },
  ehrRoutePath: { type: String },
  ehrRouteName: { type: String },
  seedData: {type: Object}
})

const Assignment = mongoose.model('Assignment', Schema)

export default Assignment
