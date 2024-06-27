const express = require('express');
const morgan = require('morgan');

const carsRouter = require('./routes/carsRoutes');
const userRouter = require('./routes/userRoutes');
const ownersRouter = require('./routes/ownersRoutes');
const parkingsRouter = require('./routes/parkingsRoutes');
const ordersRouter = require('./routes/ordersRoutess');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/user', userRouter);

app.use('/api/cars', carsRouter);

app.use('/api/owners', ownersRouter);

app.use('/api', parkingsRouter);

app.use('/api/orders', ordersRouter);

module.exports = app;
