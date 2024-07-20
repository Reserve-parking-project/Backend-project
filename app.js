const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const carsRouter = require('./routes/carsRoutes');
const userRouter = require('./routes/userRoutes');
const ownersRouter = require('./routes/ownersRoutes');
const parkingsRouter = require('./routes/parkingsRoutes');
const ordersRouter = require('./routes/ordersRoutes');

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use('/api/user', userRouter);
app.use('/api/cars', carsRouter);
app.use('/api/owners', ownersRouter);
app.use('/api', parkingsRouter);
app.use('/api/orders', ordersRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
