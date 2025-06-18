# 🔐 NexusSecure

**NexusSecure** is a scalable, enterprise-ready backend system built with **Node.js**, **Express**, **MongoDB**, and **Redis**. It features JWT authentication, role-based access, OAuth login, Redis caching, centralized error handling, and robust validation — all modularly structured and production-ready.

---

## 🚀 Features

* 🔐 **JWT + Cookie-Based Authentication**
* 🌐 **OAuth 2.0 Login** (Google, GitHub)
* 🔄 **Redis Caching** for performance & **Rate Limiting**
* ⚖️ **Role-Based Access Control (RBAC)**
* 🧩 **Modular Architecture**
* 📄 **Swagger API Documentation**
* 📅 **Joi Input Validation**
* 🛠️ **Centralized Error Handling**
* 📦 **MongoDB with Mongoose ODM**

---

## ⚙️ Tech Stack

| Tech       | Description                    |
| ---------- | ------------------------------ |
| Node.js    | JavaScript runtime             |
| Express.js | Web framework                  |
| MongoDB    | NoSQL database                 |
| Mongoose   | MongoDB ODM                    |
| Redis      | In-memory cache & rate limiter |
| JWT        | Token-based authentication     |
| OAuth      | Google/GitHub login            |
| Joi        | Request validation             |
| Swagger    | API documentation              |

---

## 📁 Folder Structure

```
📆 NexusSecure
 ┣ 📂public
 ┃ ┣ 📂images
 ┃ ┃ ┗ default.png
 ┃ ┗ 📂temp
 ┃ ┃ ┗ .gitkeep
 ┣ 📂src
 ┃ ┣ 📂config               → Env, DB, Redis, Cloudinary configs
 ┃ ┣ 📂controllers          → Route logic (auth, user, product)
 ┃ ┣ 📂db                   → MongoDB connection
 ┃ ┣ 📂docs                 → Swagger YAML/JSON files
 ┃ ┣ 📂mails                → Signup & verification mail templates
 ┃ ┣ 📂middlewares          → Auth, rate limiter, error handler
 ┃ ┣ 📂models               → Mongoose schemas
 ┃ ┣ 📂routes               → Express routes (auth, product, user)
 ┃ ┣ 📂seed                 → DB seeder scripts (admin setup)
 ┃ ┣ 📂services             → Redis, cloudinary, mail, token
 ┃ ┣ 📂utils                → Common utility functions (async, API error)
 ┃ ┣ 📂validations          → Joi validation schemas
 ┃ ┣ app.js                          → Express app entrypoint
 ┃ ┣ constants.js                    → Roles, messages, etc.
 ┃ ┗ index.js                        → Server start logic
 ┣ .env                              → Env variables
 ┣ .env.sample                       → Sample env
 ┣ .gitignore
 ┣ package.json
 ┣ package-lock.json
 ┗ README.md
```

---

## 📌 Setup Instructions

1. Clone the repo
   `git clone https://github.com/ANKITKUMARBARIK/NexusSecure.git`

2. Install dependencies
   `npm install`

3. Setup environment variables in `.env`

4. Run in dev mode
   `npm run dev`

---

## 📘️ License

This project is licensed under the **GNU License**.

---

> 💡 Designed with scalability and security in mind — by \[ankit]
