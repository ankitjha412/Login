# 🚀 React + Flask + MySQL User Management System

A full-stack web application that integrates a **React (TypeScript) frontend** with a **Flask backend** and **MySQL database**.  
It supports **user registration, login (JWT authentication), profile management (view/update), and account deletion**.  

---

## ✨ Features
- 🔐 **JWT Authentication** (Login, Protected Routes)
- 👤 **User CRUD** (Register, Login, View Profile, Update, Delete)
- 🎨 **Responsive UI** (React + TailwindCSS, with animations)
- 🛠 **Flask REST API** (SQLAlchemy ORM + Flask-Migrate)
- 💾 **MySQL Database** (migrations managed by Alembic/Flask-Migrate)

---

## 🛠 Tech Stack
**Frontend:**
- React + TypeScript
- React Router
- Axios
- TailwindCSS
- Framer Motion (for animations)

**Backend:**
- Python Flask
- Flask-JWT-Extended
- Flask-SQLAlchemy
- Flask-Migrate
- Flask-Bcrypt
- MySQL (via PyMySQL)

---

## 📂 Folder Structure

Login/
│── .gitignore
│── README.md
│
├── backend/
│ ├── app.py
│ ├── config.py
│ ├── requirements.txt
│ ├── app/
│ │ ├── init.py
│ │ ├── models.py
│ │ └── routes/
│ │ └── user_routes.py
│ └── migrations/
│ ├── env.py
│ ├── alembic.ini
│ └── versions/
│ └── xxxx_create_user_table.py
│
├── frontend/
│ ├── package.json
│ ├── tsconfig.json
│ ├── vite.config.ts
│ ├── public/
│ │ └── index.html
│ └── src/
│ ├── api/userApi.ts
│ ├── components/
│ ├── context/AuthContext.tsx
│ ├── hooks/useAuth.ts
│ ├── pages/
│ │ ├── Home.tsx
│ │ ├── Login.tsx
│ │ ├── Register.tsx
│ │ └── Profile.tsx
│ ├── styles/global.css
│ └── utils/storage.ts

yaml

---

## ⚙️ Setup Instructions

### 🔹 Backend (Flask + MySQL)


bash
python -m venv venv
venv\Scripts\activate   # On Windows
source venv/bin/activate  # On Mac/Linux
pip install -r requirements.txt
Configure database in config.py:

python
SQLALCHEMY_DATABASE_URI = "mysql+pymysql://username:password@localhost/db_name"
Run migrations:

bash
flask db upgrade
Start the backend:

bash
python app.py
Server runs at: http://127.0.0.1:5000

🔹 Frontend (React + Vite + TS)
Navigate to frontend:

bash
cd ../frontend
Install dependencies:

bash
npm install
Start development server:



👉 (Add your own later)

Login Page

Signup Page

Profile Page

<img width="1901" height="864" alt="image" src="https://github.com/user-attachments/assets/dcc89bf1-6135-4c98-9ac8-4b86b2de2c92" />
<img width="947" height="506" alt="image" src="https://github.com/user-attachments/assets/390e900d-8ceb-4dba-8325-cc8b80b9bdeb" />
<img width="1898" height="866" alt="image" src="https://github.com/user-attachments/assets/46163c2f-33e2-43f3-96aa-0c284798b8b7" />
<img width="910" height="534" alt="image" src="https://github.com/user-attachments/assets/df2918c2-6f86-4231-b036-da51ec845b6e" />
<img width="1884" height="775" alt="image" src="https://github.com/user-attachments/assets/08696594-31ae-41fc-adcf-661601cce308" />

updating
<img width="1897" height="867" alt="image" src="https://github.com/user-attachments/assets/1b12bf6a-c7e1-4022-a19e-8455f073abd8" />
<img width="911" height="557" alt="image" src="https://github.com/user-attachments/assets/26d16d4d-41de-41a6-8ce4-0028e052e75d" />
deleting - profile(Ankit)
<img width="1897" height="861" alt="image" src="https://github.com/user-attachments/assets/2b7f86a8-5fd1-4273-896f-a783fd037206" />
<img width="901" height="488" alt="image" src="https://github.com/user-attachments/assets/45d39e13-abd4-47e2-99d8-290aa9d862ab" />









Create Pull Requestrun dev
React app runs at: http://localhost:5173
