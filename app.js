require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const { errors } = require("celebrate");

const userRouter = require("./src/module/users/router.js");
const pollRouter = require("./src/module/poll/router.js");
const itemRouter = require("./src/module/item/router.js");
const participantRouter = require("./src/module/participant/router");
const choiceRouter = require("./src/module/participantChoice/router");
const AuthMiddleware = require("./src/core/middleware/auth");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ origin: ["http://localhost:3000"] }));

app.use("/api/users", userRouter);
app.use("/api/poll", pollRouter);
app.post("/api/login", AuthMiddleware.login);
app.use("/api/item", itemRouter);
app.use("/api/participant", participantRouter);
app.use("/api/choice", choiceRouter);

app.use(errors());

module.exports = app;
