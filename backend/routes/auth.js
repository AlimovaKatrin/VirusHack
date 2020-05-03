const router = require('express').Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Users } = require('../models/Users');

const saltRounds = 10;

router.post('/signup', async (req, res, next) => {
  try {
    const { name, email, password, status } = req.body;
    const userCheck = await Users.findOne({ email });
      if (userCheck) {
        res.send({message: 'Такой email уже зарегистрирован'});
      } else {
        const user = await Users.create({
          name,
          email,
          password: await bcrypt.hash(password, saltRounds),
          status,
        });
        console.log(user);
        req.session.user = user;
        res.send({user});
      }
  } catch (error) {
    next(error);
  }
});

router.post('/login', async(req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = Users.findOne({ email });
    if (user) {
      const isEqual = await bcrypt.compare(password, user.password);
      if (isEqual) {
        req.session.user = user;
        res.send({user});
      } else {
        res.send({message: 'Неправильный email или пароль'});
      }
    } else {
      res.send({message: 'Неправильный email или пароль'});
    }
  } catch (error) {
    next(error);
  }
});

router.get('/logout', (req, res, next) => {
  try {
    req.session.destroy;
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
