# 🚀 NestJS User CRUD API Enhanced

A production-style User CRUD API built using NestJS, MySQL, TypeORM, DTO Validation, and Environment Variables.

---

# 📌 Tech Stack

* NestJS
* Node.js
* TypeScript
* MySQL
* TypeORM
* class-validator
* dotenv

---

# 📁 Project Structure

```bash
src/
│
├── config/
│   └── database.config.ts
│
├── users/
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   │
│   ├── entities/
│   │   └── user.entity.ts
│   │
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
│
├── app.module.ts
└── main.ts
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/rajeevgi/NestJS-Framework
```

---

## 2️⃣ Move Into Project

```bash
cd user-crud-advanced
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 📦 Required Packages

## Install MySQL + TypeORM

```bash
npm install @nestjs/typeorm typeorm mysql2
```

---

## Install Validation Packages

```bash
npm install class-validator class-transformer
```

---

## Install Config Package

```bash
npm install @nestjs/config
```

---

## Install Mapped Types

```bash
npm install @nestjs/mapped-types
```

---

# 🗄️ Database Setup

## Create MySQL Database

```sql
CREATE DATABASE database_name;
```

---

# 🔐 Environment Variables

Create a `.env` file in the root directory.

## `.env`

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=<your username>
DB_PASSWORD=<your password>
DB_NAME=database_name

PORT=3000
```

---

# ▶️ Run Application

## Development Mode

```bash
npm run start:dev
```

---

# 🌐 Server URL

```bash
http://localhost:3000
```

---

# 📘 API Endpoints

---

## ✅ Create User

### POST `/users`

### Request Body

```json
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

```bash
GET /users/1
```

---

## ✅ Update User

### PUT `/users/:id`

### Request Body

```json
{
  "name": "Updated User"
}
```

---

## ✅ Delete User

### DELETE `/users/:id`

---

# 🧠 Features Implemented

* CRUD Operations
* DTO Validation
* Exception Handling
* Environment Variables
* MySQL Integration
* TypeORM Repository Pattern
* Modular Architecture
* Dependency Injection

---

# 📦 Important NestJS Concepts

| Concept    | Description           |
| ---------- | --------------------- |
| Module     | Feature container     |
| Controller | Handles HTTP requests |
| Service    | Business logic        |
| DTO        | Request validation    |
| Entity     | Database table        |
| Repository | Database operations   |

---

# 🛡️ Validation Used

| Decorator       | Purpose        |
| --------------- | -------------- |
| `@IsNotEmpty()` | Required field |
| `@IsEmail()`    | Valid email    |
| `@Min()`        | Minimum value  |

---

# ⚠️ Common Errors & Fixes

---

## ❌ Error

```bash
Type 'typeof users' cannot be used as an index type
```

### ✅ Fix

Wrong:

```ts
TypeOrmModule.forFeature[users]
```

Correct:

```ts
TypeOrmModule.forFeature([User])
```

---

## ❌ Error

```bash
Data type "string" is not supported by mysql
```

### ✅ Fix

```ts
@Column({
  type: 'varchar',
})
name: string;
```

---

# ⚙️ Important tsconfig Settings

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

---

# 🚀 Future Improvements

* JWT Authentication
* Password Hashing
* Role-Based Access
* Guards
* Swagger Documentation
* Docker Support
* Prisma ORM
* Refresh Tokens

---

# 👨‍💻 Author - Rajeev ❤️

Built while learning and practicing NestJS backend development.

---
