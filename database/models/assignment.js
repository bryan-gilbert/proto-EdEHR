import mongoose from 'mongoose'
/*
 */

const Schema = new mongoose.Schema({
  externalId: {type: String},
  name: { type: String },
  ehrRoute: { type: String },
  seedData: {type: Object}
})

const Assignment = mongoose.model('Assignment', Schema)

export default Assignment
