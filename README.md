# 🧠 ToDoVoodoo Backend

This is the **backend** for the ToDoVoodoo app — a simple and clean task management API built with **Node.js**, **Express**, and **MongoDB** using **Mongoose** ODM.

It provides a fully working CRUD API for managing tasks, including:
- ✅ Add a task
- 📋 Get all tasks
- ✏️ Update a task (status or text)
- ❌ Delete a task

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (via **Mongoose**)
- **CORS** & **dotenv**
- API tested using **Postman**

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/sujal-1245/ToDoVoodoo.git
cd ToDoVoodoo
git checkout backend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the root of the backend directory with the following:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

> Replace `your_mongodb_connection_string` with your real MongoDB URI.

### 4. Run the server

```bash
node index.js
```

> The server will start at `http://localhost:3000`

---

## 🔌 API Endpoints

All routes are prefixed with `/api`.

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/tasks`     | Get all tasks     |
| POST   | `/api/tasks`     | Create a new task |
| PATCH  | `/api/tasks/:id` | Update a task     |
| DELETE | `/api/tasks/:id` | Delete a task     |

---

## 📸 Screenshots (Postman)

### ▶️ Create Task (POST `/api/tasks`)

<img width="1271" height="851" alt="image" src="https://github.com/user-attachments/assets/dea27863-59b4-4b0d-8dc3-803c692efcf8" />


### 📥 Get All Tasks (GET `/api/tasks`)

<img width="1278" height="811" alt="image" src="https://github.com/user-attachments/assets/83a2c18e-a824-4f7e-b46e-a4ea1af24e7a" />


### ✏️ Update Task (PATCH `/api/tasks/:id`)

<img width="1278" height="858" alt="image" src="https://github.com/user-attachments/assets/a0e312a5-abe7-4355-b068-2c81621a8d9a" />


### ❌ Delete Task (DELETE `/api/tasks/:id`)

<img width="1277" height="681" alt="image" src="https://github.com/user-attachments/assets/bb5e4ca7-e489-4a0f-b00d-5a2dee16975e" />

---

## 📁 Folder Structure

```
backend/
│
├── models/
│   └── Todo.js          # Mongoose schema
├── routes/
│   └── taskRoutes.js    # All task-related routes
├── .env                 # Environment variables
├── server.js            # Entry point
├── package.json
└── README.md
```

---

## 👨‍💻 Author

**Sujal Bhagat**
🔗 [LinkedIn](https://www.linkedin.com/in/sujal-bhagat-sdb1245/)
💻 [GitHub](https://github.com/sujal-1245)

---

## 📃 License

This project is open-source and free to use under the [MIT License](LICENSE).
