# 🤖 **NovaAI - Advanced AI Chat Assistant** ✨

<div align="center">

![NovaAI Logo](https://img.shields.io/badge/NovaAI-Advanced%20AI%20Assistant-purple?style=for-the-badge&logo=openai)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.6-blue?style=for-the-badge&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-7.4.2-green?style=for-the-badge&logo=mongodb)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Available-brightgreen?style=for-the-badge)](https://your-demo-link.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-orange?style=for-the-badge)](CONTRIBUTING.md)

</div>

---

## 📖 **About NovaAI**

**NovaAI** is a cutting-edge, full-stack AI chat application that provides an intelligent conversational experience powered by OpenAI's GPT models. Built with modern web technologies, NovaAI offers a seamless, responsive, and secure platform for AI-powered interactions.

### 🌟 **Key Highlights**

- 🎨 **Modern UI/UX** - Beautiful gradient design with smooth animations
- 🔐 **Secure Authentication** - JWT-based authentication with HTTP-only cookies
- 💬 **Real-time Chat** - Instant AI responses with conversation history
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🚀 **High Performance** - Built with Vite for lightning-fast development
- 🛡️ **Production Ready** - Comprehensive error handling and validation

---

## ✨ **Features**

### 🔐 **Authentication & Security**
- **User Registration & Login** - Secure account creation and management
- **JWT Token Authentication** - Industry-standard security implementation
- **Protected Routes** - Secure access control for authenticated users
- **Password Hashing** - bcrypt encryption for user passwords
- **Session Management** - Persistent user sessions with secure cookies

### 💬 **Chat Experience**
- **AI-Powered Conversations** - Powered by OpenAI GPT-3.5 Turbo
- **Real-time Messaging** - Instant responses and smooth interactions
- **Conversation History** - Persistent chat history for each user
- **Code Syntax Highlighting** - Beautiful code display with syntax highlighting
- **Message Management** - Clear conversation functionality

### 🎨 **User Interface**
- **Modern Design** - Beautiful gradient themes and smooth animations
- **Responsive Layout** - Optimized for all screen sizes
- **Material UI Components** - Professional and accessible components
- **Dark Theme** - Easy on the eyes with modern dark styling
- **Interactive Elements** - Hover effects and smooth transitions

### ⚡ **Performance & Development**
- **TypeScript** - Full type safety and better development experience
- **Hot Module Replacement** - Instant updates during development
- **Optimized Build** - Production-ready optimized bundles
- **Error Handling** - Comprehensive error management and user feedback
- **Input Validation** - Robust data validation on both client and server

---

## 🛠️ **Technology Stack**

### **Frontend**
- **React 18.2.0** - Modern UI library with hooks and functional components
- **TypeScript 5.0.2** - Type-safe JavaScript for better development
- **Vite 4.4.5** - Lightning-fast build tool and development server
- **Material-UI 5.14.9** - Professional React component library
- **React Router 6.16.0** - Client-side routing and navigation
- **Axios 1.5.0** - HTTP client for API communication
- **React Hot Toast 2.4.1** - Beautiful toast notifications

### **Backend**
- **Node.js** - JavaScript runtime environment
- **Express.js 4.18.2** - Fast, unopinionated web framework
- **TypeScript 5.1.6** - Type-safe server-side development
- **MongoDB 7.4.2** - NoSQL database for flexible data storage
- **Mongoose 7.4.2** - MongoDB object modeling for Node.js
- **JWT 9.0.1** - JSON Web Token for secure authentication
- **bcrypt 5.1.0** - Password hashing and security

### **AI Integration**
- **OpenAI API 3.3.0** - GPT-3.5 Turbo integration for AI responses

### **Development Tools**
- **ESLint** - Code linting and quality assurance
- **Nodemon** - Automatic server restart during development
- **Concurrently** - Run multiple commands simultaneously
- **Morgan** - HTTP request logger middleware

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- OpenAI API key

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/SyntaxNova/NovaAI.git
   cd NovaAI
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `backend` directory:
   ```env
   MONGODB_URL=mongodb://localhost:27017/novaai
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRES_IN=7d
   COOKIE_SECRET=your_cookie_secret_here
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=5000
   NODE_ENV=development
   ```

4. **Start the application**
   ```bash
   # Start backend server (from backend directory)
   npm run dev
   
   # Start frontend server (from frontend directory)
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

---

## 🔧 **API Endpoints**

### **Authentication**
- `POST /api/v1/user/signup` - User registration
- `POST /api/v1/user/login` - User login
- `GET /api/v1/user/auth-status` - Check authentication status
- `GET /api/v1/user/logout` - User logout

### **Chat**
- `POST /api/v1/chat/new` - Send new message to AI
- `GET /api/v1/chat/all-chats` - Get user's chat history
- `DELETE /api/v1/chat/delete` - Clear conversation history

### **Users**
- `GET /api/v1/user/` - Get all users (admin)

---

## 🏗️ **Project Structure**

```
NovaAI/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Utility functions
│   │   ├── config/         # Configuration files
│   │   └── db/            # Database connection
│   ├── dist/              # Compiled TypeScript
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   ├── helpers/       # Utility functions
│   │   └── assets/        # Static assets
│   └── package.json
└── README.md
```

---


## 🤝 **Contributing**

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 **Author**

**Atharva Pachpute (Syntax Nova)**
- GitHub: [@SyntaxNova](https://github.com/SyntaxNova)
- LinkedIn: [Atharva Pachpute](https://www.linkedin.com/in/atharva-pachpute3/)

---

## 🙏 **Acknowledgments**

- OpenAI for providing the powerful GPT API
- Material-UI team for the excellent component library
- React team for the amazing framework
- MongoDB for the flexible database solution



<div align="center">

**⭐ Star this repository if you found it helpful!**


Made with ❤️ by [Atharva Pachpute (Syntax Nova)](https://github.com/SyntaxNova)

</div>
