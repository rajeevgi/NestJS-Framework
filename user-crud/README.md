# 🚀 NestJS Basic User CRUD API

A simple User CRUD API built using NestJS with database integration.
This project demonstrates the core fundamentals of NestJS including:

* Modules
* Controllers
* Services
* Dependency Injection

---

# 📌 Tech Stack

* NestJS
* Node.js
* TypeScript

---

# 📁 Project Structure

```bash id="zqv8k1"
src/
│
├── users/
|   ├── entites/
|   |   └── users.entity.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
│
├── app.module.ts
└── main.ts
```

---

# ⚙️ Installation

## 1️⃣ Create Project

```bash id="k0s7p3"
nest new user-crud-basic
```

---

## 2️⃣ Move Into Project

```bash id="g5t2l9"
cd user-crud-basic
```

---

## 3️⃣ Install Packages Required

```bash id="n2v7m8"
npm install @nestjs/typeorm typeorm mysql2
```

---

# ▶️ Run Application

```bash id="m8j1c4"
npm run start:dev
```

---

# 🌐 Server URL

```bash id="p4w9x2"
http://localhost:3000
```

---

# 📦 Generate User Module

```bash id="r8d5k1"
nest g module users
nest g controller users
nest g service users
```

---

# 📘 Features Implemented

* Create User
* Get All Users
* Get User By ID
* Update User
* Delete User
* Dependency Injection

---

# 📦 Important NestJS Concepts

| Concept              | Description                   |
| -------------------- | ----------------------------- |
| Module               | Feature container             |
| Controller           | Handles HTTP requests         |
| Service              | Business logic                |
| Entity               | Database Table Schema         |
| Dependency Injection | Inject services automatically |

---

# 📘 API Endpoints

---

## ✅ Create User

### POST `/users`

### Request Body

```json id="h2s9f1"
{
  "name": "user1",
  "email": "user1@example.com",
  "age": 24
}
```

---

## ✅ Get All Users

### GET `/users`

---

## ✅ Get User By ID

### GET `/users/:id`

Example:

```bash id="l6x8w0"
GET /users/1
```

---

## ✅ Update User

### PUT `/users/:id`

### Request Body

```json id="u4v1p7"
{
  "name": "Updated User"
}
```

---

## ✅ Delete User

### DELETE `/users/:id`

---

# 🚀 Future Improvements

* .env to hide DB Credentials
* DTO layer
* DTO class validator
* Exception Handling

---

# 👨‍💻 Author - Rajeev ❤️

Built while learning and practicing NestJS fundamentals.

---
