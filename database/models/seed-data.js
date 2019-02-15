import mongoose from 'mongoose'
/*
 */

const Schema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  version: { type: String },
  ehrData: {type: Object},
  createDate: {type: Date, default: Date.now},
  lastUpdateDate: {type: Date, default: Date.now}
})

const SeedData = mongoose.model('SeedData', Schema)

export default SeedData
