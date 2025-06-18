import redisClient from "../config/redis.config.js";
import RedisStore from "rate-limit-redis";
import rateLimit from "express-rate-limit";

// Global Rate Limiter - 100 req/IP per 15 mins
export const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        status: 429,
        message: "Too many requests. Please try again later.",
    },
    store: new RedisStore({
        sendCommand: (...args) => redisClient.call(...args),
        prefix: "rl:global:",
    }),
});

// Login Limiter - 5 login attempts in 10 mins
export const loginLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 5,
    keyGenerator: (req) => req.ip,
    message: {
        status: 429,
        message: "Too many login attempts. Please wait 10 minutes.",
    },
    store: new RedisStore({
        sendCommand: (...args) => redisClient.call(...args),
        prefix: "rl:login:",
    }),
});

// OTP Verify Limiter - 3 tries per 10 mins
export const otpLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 3,
    keyGenerator: (req) => req.body?.email || req.ip,
    message: {
        status: 429,
        message: "Too many OTP attempts. Try again later.",
    },
    store: new RedisStore({
        sendCommand: (...args) => redisClient.call(...args),
        prefix: "rl:otp:",
    }),
});

// Forgot Password Limiter - 5 requests in 15 mins
export const forgotPasswordLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    keyGenerator: (req) => req.body?.email || req.ip,
    message: {
        status: 429,
        message: "Too many password reset requests. Try again later.",
    },
    store: new RedisStore({
        sendCommand: (...args) => redisClient.call(...args),
        prefix: "rl:forgot:",
    }),
});
