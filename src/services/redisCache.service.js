import redisClient from "../config/redis.config.js";

export const setCache = async (key, value, ttlInSec = 300) => {
    try {
        await redisClient.set(key, JSON.stringify(value), "EX", ttlInSec);
    } catch (err) {
        console.error("Redis Set Error:", err.message);
    }
};

export const getCache = async (key) => {
    try {
        const data = await redisClient.get(key);
        return data ? JSON.parse(data) : null;
    } catch (err) {
        console.error("Redis Get Error:", err.message);
        return null;
    }
};

export const delCache = async (...keys) => {
    try {
        await redisClient.del(...keys);
    } catch (err) {
        console.error("Redis Delete Error:", err.message);
    }
};
