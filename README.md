# 🔐 NexusSecure

**NexusSecure** is a scalable, enterprise-level backend system built with Node.js, Express, MongoDB, and Redis. It offers robust authentication, secure session handling, OAuth integration, rate limiting, and a modular codebase — ready for production use.

---

## 🚀 Features

- 🔐 **JWT + Cookie Based Authentication**
- 🌐 **OAuth 2.0 Login** (Google, GitHub)
- 🔄 **Redis** for Caching & Rate Limiting
- 🧩 **Modular & Scalable Architecture**
- 🔒 **Role-Based Access Control (RBAC)**
- 📄 **Swagger API Documentation**
- 🛠️ **Centralized Error Handling**
- 📦 **MongoDB with Mongoose**

---

## ⚙️ Tech Stack

| Tech       | Description                         |
|------------|-------------------------------------|
| Node.js    | JavaScript runtime                  |
| Express.js | Web framework for Node.js           |
| MongoDB    | NoSQL database                      |
| Mongoose   | ODM for MongoDB                     |
| Redis      | In-memory data store                |
| JWT        | Token-based authentication          |
| OAuth      | Social login via Google/GitHub      |
| Swagger    | API documentation tool              |

---

## 📁 Project Structure

```
📦 NexusSecure
 ┣ 📂src
 ┃ ┣ 📂config          → Env, DB, Redis configs
 ┃ ┣ 📂constants       → Roles, messages, status codes
 ┃ ┣ 📂middlewares     → Auth, rate limiter, error handler
 ┃ ┣ 📂models          → Mongoose schemas
 ┃ ┣ 📂controllers     → Route logic
 ┃ ┣ 📂services        → Business logic, Redis, JWT utils
 ┃ ┣ 📂routes          → API endpoints
 ┃ ┣ 📂docs            → Swagger YAML/JSON files
 ┃ ┗ 📜app.js          → Main express app setup
 ┣ 📜server.js         → Entry point, DB + Redis connect
 ┣ 📜.env              → Environment variables
 ┗ 📜README.md         → You're reading it!
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

## 📘 License

This project is licensed under the GNU License.

---

> 💡 Designed with scalability and security in mind — by [ankit]