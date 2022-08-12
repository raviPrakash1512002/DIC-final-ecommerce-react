const User = require("../model/user");
const jwt = require("jsonwebtoken");

module.exports.createSession = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user || user.password != req.body.password) {
      return res.json(422, {
        message: "Invalid username or password!!",
      });
    }
    return res.json(200, {
      message: "Sign in successful,here is your token,please keep it safe!!",
      data: {
        token: jwt.sign(user.toJSON(), "xyz", { expiresIn: "100000" }),
      },
    });
  } catch (err) {
    return res.json(500, {
      message: "Internal Server Error!"
    });
  }
};

module.exports.create = (req, res) => {

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.json(422, {
        message: "error in finding user in signUp!!",
      });
    }
    if (!user) {
      User.create(req.body, (err, user) => {
        if (err) {
          return res.json(422, {
            message: "Invalid username or password!!",
          });
        }
        return res.json(200, {
          message: "User created successfully",
        });
      });
    } else {
      return res.json(500, {
        message: "Already User created!",
      });
    }
  });
};
module.exports.destroySession = function (req, res) {
    req.logout();
    return res.json(200, {
        message: "User sign out Successfully!!!!!!!!!!!!",
      });
   
}

