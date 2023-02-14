const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");
const APIError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

app.use("/api/contacts", contactsRouter);

app.use((req, res, next) => {
  return next(new APIError(404, "Resource not found!"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error!";
  return res.status(statusCode).json({ message });
});

module.exports = app;
