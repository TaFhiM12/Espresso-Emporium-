
```markdown
# ☕ Espresso Emporium - Coffee Store Management

**Live Demo:** [https://tea-auth-557be.web.app/](https://dragon-news-5bd87.web.app/)

A full-stack coffee store management application with user authentication, coffee catalog, and admin features.

![App Screenshot](./screenshot.png) <!-- You can add a screenshot later -->

## ✨ Features

- **User Authentication**

  - Sign up with email/password
  - Sign in/out functionality
  - Protected routes for authenticated users

- **Coffee Management**

  - Add new coffee products
  - View coffee details
  - Update existing coffee items
  - Delete coffees

- **User Management**

  - View all registered users
  - Update user profiles (address, phone, photo)
  - Admin privileges

- **Responsive Design**
  - Works on mobile, tablet, and desktop
  - Coffee-themed UI with elegant aesthetics

## 🛠️ Technologies Used

### Frontend

- React 19
- React Router 7
- Tailwind CSS with DaisyUI
- Firebase Authentication
- Axios for API calls
- SweetAlert2 for notifications
- Lucide & React Icons

### Backend

- Node.js
- Express
- MongoDB

## 📂 Project Structure
```

coffee-client/
├── src/
│ ├── Components/
│ │ ├── AddCoffee.jsx
│ │ ├── CoffeeDetails.jsx
│ │ ├── Header.jsx
│ │ ├── Home.jsx
│ │ ├── Signin.jsx
│ │ ├── Signup.jsx
│ │ ├── UpdateCoffee.jsx
│ │ ├── UpdateUser.jsx
│ │ └── Users.jsx
│ ├── Layouts/
│ │ └── MainLayout.jsx
│ ├── contexts/
│ │ └── AuthContext.js
│ ├── router.js
│ └── main.jsx
├── public/
│ ├── logo1.png
│ └── 15.jpg
└── package.json

````

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- Firebase project for authentication
- MongoDB database

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/coffee-store.git
   cd coffee-store/coffee-client
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Firebase config:

   ```env
   VITE_FIREBASE_API_KEY=AIzaSyDrs_5CtLq9rl8foit1dx3piH8J88i-Bxw
   VITE_FIREBASE_AUTH_DOMAIN=tea-auth-557be.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=tea-auth-557be
   VITE_FIREBASE_STORAGE_BUCKET=tea-auth-557be.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=921404485316
   VITE_FIREBASE_APP_ID=1:921404485316:web:824a7dd4f40c87b93ba391

   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🌐 API Endpoints

The frontend communicates with these backend endpoints:

- `GET /coffees` - Get all coffee products
- `GET /coffees/:id` - Get single coffee details
- `POST /coffees` - Add new coffee
- `PUT /coffees/:id` - Update coffee
- `DELETE /coffees/:id` - Delete coffee
- `GET /users` - Get all users
- `GET /users/:id` - Get single user
- `PUT /users/:id` - Update user

## 🎨 UI Components

### Header

- Responsive navigation bar
- User profile dropdown
- Authentication links
- Coffee-themed design with background image

### Coffee Cards

- Beautiful card layout for each coffee
- Action buttons (View, Edit, Delete)
- Responsive grid system

### Forms

- Add/Update Coffee forms
- User profile update form
- Validation and error handling

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License.

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/your-username/coffee-store](https://github.com/your-username/coffee-store)

