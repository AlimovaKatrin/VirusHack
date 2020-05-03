const router = require('express').Router();
const mongoose = require('mongoose');
const { Patient } = require('../models/patient');
const { Users } = require('../models/users');
const parser = require('../middleware/img-upload')

router.post('/', async (req, res, next) => {
  try {
    const { name, surname, sex, age, address, phone, diagnosis } = req.body;
    const patient = await Patient.create({
      name, surname, sex, age, address, phone, diagnosis,
    });
    res.send({ patient });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', parser.single('image'), async (req, res, next) => {
  try {
    console.log(req.file)
    const _id = req.params.id;
    const image = {};
    image.url = req.file.url;
    image.id = req.file.public_id;
    await Patient.updateOne({ _id }, { $set: { image: image.url } });
    res.send({ imageUrl: image.url });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
