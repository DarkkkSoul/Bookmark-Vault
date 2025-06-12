# 🔖 Bookmark Vault

A backend system where authenticated users can save, categorize, view, and delete personal bookmarks. Inspired by apps like Pocket or Pinterest — but backend-only.

---

## 🔸 Objective

Build a backend-only system where **authenticated users** can:

- Save bookmarks (URLs to anything useful)
- Categorize them
- View all or filter by category
- Delete or update bookmarks

---

## 🧱 Core Entities (Models)

### 1. User

Represents a registered user.

**Fields:**

- `username`: `String` – Unique username
- `email`: `String` – Unique email
- `password`: `String` – Hashed password
- `createdAt`: `Date` – Optional

---

### 2. Bookmark

Each bookmark belongs to **one user**.

**Fields:**

- `title`: `String` – Name of the link
- `url`: `String` – The actual URL
- `category`: `String` – e.g., "Tech", "Recipes"
- `createdAt`: `Date`
- `user`: `ObjectId` – Reference to User

🧠 **Relation**:  
**User (1)** ➝ **(∞) Bookmarks**

---

## 🎮 Controllers

### 1. Auth Controller

| Endpoint       | Description                    |
| -------------- | ------------------------------ |
| `POST /signup` | Register a new user            |
| `POST /login`  | Authenticate user & return JWT |
| `POST /logout` | (Optional) Token invalidation  |

---

### 2. Bookmark Controller

| Endpoint                          | Description                      |
| --------------------------------- | -------------------------------- |
| `POST /bookmarks`                 | Add new bookmark (auth required) |
| `GET /bookmarks`                  | Get all bookmarks for user       |
| `GET /bookmarks?category=Tech`    | Filter bookmarks by category     |
| `DELETE /bookmarks/:id`           | Delete a bookmark                |
| `PUT /bookmarks/:id` _(Optional)_ | Update bookmark (title/category) |

---

## 🛡️ Middleware

### Auth Middleware

- Verifies JWT token
- Attaches authenticated user to request
- Protects all `/bookmarks` routes

---

## 🔀 Routes

- `authRoutes.js` → `/signup`, `/login`, `/logout`
- `bookmarkRoutes.js` → `/bookmarks` CRUD operations (protected)

---

## 💡 Optional Enhancements (Advanced Features)

- ✅ JWT expiration & **refresh token flow**
- ✅ Bookmark **tags** (array of strings)
- ✅ **Search** bookmarks by keyword or title
- ✅ **Sort** by `createdAt`
- ✅ Limit bookmarks per user unless “**premium**”
- ✅ Export bookmarks as `.json` file

---

## 🧠 Learning Goals

- Structure **user-specific data**
- Validate and store **URLs**
- Filter by **category**
- Securely handle user **authentication**
- Build **one-to-many** relationships

---

## 🛠️ Tech Stack Suggestion

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **JWT** for authentication
- **bcrypt** for password hashing
- (Optional) **dotenv**, **cors**, **helmet**
