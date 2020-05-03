const express = require("express");
const useMiddleware = require("./middleware");
const authRouter = require("./routes/auth");
const patientRouter = require("./routes/patient");
const useErrorHandlers = require("./middleware/error-handlers");

const app = express();
useMiddleware(app);

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/auth', authRouter);
app.use('/patient', patientRouter);

useErrorHandlers(app);

module.exports = app;
