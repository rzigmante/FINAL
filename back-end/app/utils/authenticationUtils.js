const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const users = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.user = users;
    next();
  } catch (e) {
    res.json({
      message: "Invalid token",
    });
  }
};

module.exports = {
  verifyToken,
};
