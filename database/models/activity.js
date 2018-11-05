import mongoose from 'mongoose'

const ActivitySchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: String
})

const Activity = mongoose.model('Activity', ActivitySchema)

export default Activity
