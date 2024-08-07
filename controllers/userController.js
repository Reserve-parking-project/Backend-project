const User = require('./../models/userModel');
const Account = require('./../models/accountModel');
const catchAsync = require('./../utils/catchAsync');

// exports.userRegistration = (req, res) => {};

// exports.userAuthorization = (req, res) => {};

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});
