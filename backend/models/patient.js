const mongoose = require('mongoose');
const { Users } = require('./users');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  sex: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  diagnosis: { type: String, required: true },
  responsiblePerson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  doctor: Object,
  painStatistics: Array,
  carePlan: Array,
  image: String,
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = {
  patientSchema,
  Patient,
};
