import mongoose from 'mongoose'
/*
 */
const Schema = new mongoose.Schema({
  module: { type: String, required: true, unique: true },
  runDate: { type: Date, default: null },
  output: { type: String, default: '' }
})

Schema.pre('save', function (next) {
  this.runDate = Date.now()
  next()
})

console.log('Register schema for integration ')
const Integration = mongoose.model('Integration', Schema)

export default Integration
