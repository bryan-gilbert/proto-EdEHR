import mongoose from 'mongoose'
/*
An Activity is a tool consumer assignment. The context_id is the course id in the LMS.
The resource_link_id is the assignment id in the LMS.

TODO implement:
EdEHR requires a custom_assignment value to link to the seed data.
Note that multiple Activities can use the same seed data. But each Activity is
tracked and managed separately.
 */

const Schema = new mongoose.Schema({
  toolConsumer: {type: mongoose.Schema.Types.ObjectId, ref: 'Consumer', required: true},
  resource_link_id: {type: String, required: true}, // ltiData.resource_link_id,
  context_id: {type: String}, // ltiData.context_id,
  context_label: {type: String}, // ltiData.context_label,
  context_title: {type: String}, // ltiData.context.context_title,
  context_type: {type: String}, // ltiData.context_type,
  resource_link_title: {type: String}, // ltiData.resource_link_title,
  resource_link_description: {type: String}, // ltiData.resource_link_description,
  custom_assignment: {type: String}, // ltiData.custom_assignment,
  createDate: {
    type: Date,
    default: Date.now
  },
  lastVisitDate: {
    type: Date,
    default: Date.now
  }

})

const Activity = mongoose.model('Activity', Schema)

export default Activity
