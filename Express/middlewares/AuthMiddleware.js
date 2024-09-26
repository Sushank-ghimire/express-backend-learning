const authMiddleware = (req, res, next) => {
  if (req.query.password) {
    console.log(req.get("connection"));
    if (req.query.password === "password") {
      res.send("Authentication Throw The Middleware.");
      next();
    }
    res.sendStatus(401);
  } else {
    console.log(req.method, req.ip);
    console.error("Wrong Validations!");

    // Unauthorized Person
    res.sendStatus(401);
  }
  return;
};

export default authMiddleware;
