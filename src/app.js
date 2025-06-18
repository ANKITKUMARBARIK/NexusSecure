import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { fileSize } from "./constants.js";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.middleware.js";
import { globalLimiter } from "./middlewares/rateLimiter.middleware.js";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true, limit: fileSize }));
app.use(express.json({ limit: fileSize }));
app.use(express.static("public"));
app.use(cookieParser());

// Global rate limiter - must come BEFORE all route definitions
app.use(globalLimiter);

// routes import
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";

// routes define
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);

// global error handler - one last middleware
app.use(errorMiddleware);

export default app;
