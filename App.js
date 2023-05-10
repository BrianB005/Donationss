require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const morgan = require("morgan");

const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");

const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const authRouter = require("./routes/authRoutes");
const emailRouter = require("./routes/emailRoutes");

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());
app.use(morgan("tiny"));

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/emails", emailRouter);

// error middlewares
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is currently listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
