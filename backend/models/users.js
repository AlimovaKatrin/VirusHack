const mongoose = require('mongoose');
const { patientSchema } = require('../models/patient');

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: Boolean, required: true },
  phone: String,
  patients: [patientSchema],
});

const Users = mongoose.model('Users', usersSchema);

module.exports = {
  usersSchema,
  Users,
};
