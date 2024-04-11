const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

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

const userCars = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/userCars.json`)
);

// 2) ROUTE HANDLERS

const userRegistration = (req, res) => {};

const userAuthorization = (req, res) => {};

const getAllUserCars = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: userCars.length,
    data: {
      userCars,
    },
  });
};

const getAllCarTypes = (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1;
  const carType = userCars.find((el) => el.id === id);

  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: userCars.length,
    data: {
      carId: id,
      carTypes: carType,
    },
  });
};

const addCar = (req, res) => {
  const newId = userCars[userCars.length - 1].id + 1;
  const newCar = Object.assign({ id: newId }, req.body);

  userCars.push(newCar);

  fs.writeFile(
    `${__dirname}/dev-data/data/cars.json`,
    JSON.stringify(userCars),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          addedCar: newCar,
        },
      });
    }
  );
};

const addCarType = (req, res) => {};

const deleteCarType = (req, res) => {};

const deleteCar = (req, res) => {};

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
const userRouter = express.Router();
const userCarsRouter = express.Router();
const ownersRouter = express.Router();
const parkingsRouter = express.Router();
const ordersRouter = express.Router();

app.use("/api/user/register", userRouter);
app.use("/api/user/login", userRouter);

app.use("/api/cars/get", userCarsRouter);
app.use("/api/cars/types/get", userCarsRouter);
app.use("/api/cars/add", userCarsRouter);
app.use("/api/cars/type/add", userCarsRouter);
app.use("/api/cars/type/", userCarsRouter);
app.use("/api/cars/", userCarsRouter);

// tourRouter.route("/").get(getAllTours).post(createTour);

// tourRouter.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

// userRouter.route("/").get(getAllUsers).post(createUser);

// userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

userCarsRouter.route("/").get(getAllUserCars).post(addCar);
//userCarsRouter.route("/").get(getAllCarTypes);
//userCarsRouter.route("/").get(add);

// 4) START SERVER

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
