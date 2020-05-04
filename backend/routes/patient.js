const router = require('express').Router();
const mongoose = require('mongoose');
const { Patient } = require('../models/patient');
const { Users } = require('../models/users');
const parser = require('../middleware/img-upload')


router
  .route('/')
  .get(async (req, res, next) => {
    try {
      console.log(req.session);
      const { _id } = req.session.user;
      const user = await Users.findOne({ _id });
      res.send({ patients: user.patients });
    } catch (error) {
      next(error);
    }
  })
    .post(async (req, res, next) => {
      try {
        const { _id } = req.session.user;
        const { name, surname, sex, age, address, phone, diagnosis } = req.body;
        const patient = await Patient.create({
          name, surname, sex, age, address, phone, diagnosis, responsiblePerson: _id,
        });
        await Users.updateOne({ _id }, { $pull:{ patients:[patient] } });
        res.send({ patient });
      } catch (error) {
        next(error);
      }
    });

router.put('/:id', parser.single('file'), async (req, res, next) => {
  try {
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

router
  .route('/:id/pain')
  .get(async (req, res, next) => {
    try {
      const _id = req.params.id;
      const patient = await Patient.findOne({ _id });
      res.send({ painStatistics: patient.painStatistics });
    } catch (error) {
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const { options, id } = req.body;
      await Patient.updateOne({ _id }, { $pull: { painStatistics: [options] } });
      const patient = await Patient.findOne({ _id });
      res.send({ painStatistics: patient.painStatistics });
    } catch (error) {
      next(error);
    }
  });


module.exports = router;
