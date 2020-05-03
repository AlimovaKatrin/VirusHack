const mongoose = require("mongoose");
require('dotenv').config();


mongoose.connect(process.env.DB_CONN, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to the Database'))
.catch((err) => console.log(err));

module.exports = mongoose.connection;
