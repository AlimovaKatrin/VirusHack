const express = require("express");
const useMiddleware = require("./middleware");
const authRouter = require("./routes/auth");
const useErrorHandlers = require("./middleware/error-handlers");

const app = express();
useMiddleware(app);

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/auth', authRouter);

useErrorHandlers(app);

module.exports = app;
