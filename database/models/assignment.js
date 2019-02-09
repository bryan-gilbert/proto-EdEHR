import mongoose from 'mongoose'
/*
 */

const Schema = new mongoose.Schema({
  externalId: {type: String},
  name: { type: String },
  description: { type: String },
  ehrRoutePath: { type: String },
  ehrRouteName: { type: String },
  seedDataId: {type: mongoose.Schema.Types.ObjectId, ref: 'Seed'}, //, required: true},
  seedData: {type: Object}
})

const Assignment = mongoose.model('Assignment', Schema)

export default Assignment
