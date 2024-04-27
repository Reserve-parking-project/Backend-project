const express = require("express");
const morgan = require("morgan");

const carsRouter = require("./routes/carsRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const ownersRouter = require("./routes/ownersRoutes.js");
const parkingsRouter = require("./routes/parkingsRoutes.js");
const ordersRouter = require("./routes/ordersRoutes.js");

const app = express();

// 1) MIDDLEWARES
app.use(morgan("dev"));

app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2) ROUTE HANDLERS

// const getAllTours = (req, res) => {
//   console.log(req.requestTime);

//   res.status(200).json({
//     status: "success",
//     requestedAt: req.requestTime,
//     results: tours.length,
//     data: {
//       tours: tours, //tours,
//     },
//   });
// };

// const getTour = (req, res) => {
//   console.log(req.params);
//   const id = req.params.id * 1;
//   const tour = tours.find((el) => el.id === id);

//   //if (id > tours.length) {
//   if (!tour) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid id",
//     });
//   }

//   res.status(200).json({
//     status: "success",
//     data: {
//       tours: tour,
//     },
//   });
// };

// const createTour = (req, res) => {
//   //'/api/v1/tours/:id'
//   //console.log(req.body);

//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);

//   tours.push(newTour);

//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours.json`,
//     JSON.stringify(tours),
//     (err) => {
//       res.status(201).json({
//         status: "success",
//         data: {
//           tour: newTour,
//         },
//       });
//     }
//   );
// };

// const updateTour = (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid id",
//     });
//   }

//   res.status(200).json({
//     status: "success",
//     data: {
//       tour: "<Updated tour here...>",
//     },
//   });
// };

// const deleteTour = (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid id",
//     });
//   }

//   res.status(204).json({
//     status: "success",
//     data: null,
//   });
// };

// const getAllUsers = (req, res) => {
//   res.status(500).json({
//     status: "error",
//     message: "This route is not yet defined",
//   });
// };

// const getUser = (req, res) => {
//   res.status(500).json({
//     status: "error",
//     message: "This route is not yet defined",
//   });
// };

// const createUser = (req, res) => {
//   res.status(500).json({
//     status: "error",
//     message: "This route is not yet defined",
//   });
// };

// const updateUser = (req, res) => {
//   res.status(500).json({
//     status: "error",
//     message: "This route is not yet defined",
//   });
// };

// const deleteUser = (req, res) => {
//   res.status(500).json({
//     status: "error",
//     message: "This route is not yet defined",
//   });
// };

var o;

// 3) ROUTES
app.use("/api/user", userRouter);

app.use("/api/cars", carsRouter);

app.use("/api/owners", ownersRouter);

app.use("/api", parkingsRouter);

app.use("/api/orders", ordersRouter);

// 4) START SERVER

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
