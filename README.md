# Bookfolio - A Personalized Book Tracking Website

## Team
- **Sophie Nguyen** (Lead, Backend)
- **Harry Cao** (LLM & Chatbot)
- **Quoc Bao Le** (UI/UX, Frontend)

## Description
Bookfolio is a web application designed for book enthusiasts to track and manage their reading journey. Users can:
- List books they have read
- Create a collection of favorite books
- Manage their book lists through CRUD (Create, Read, Update, Delete) operations
- Utilize an LLM-powered chatbot for book consulting, recommendations, summaries, and discussions

The application offers a seamless and engaging way to monitor and record reading activities.

## Tech Stack
- **Frontend:** React.js, JavaScript, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL, SQL
- **External APIs:** Google Books API, DeepSeek-R1

## Data Sources
- **Google Books API:** Fetches book metadata (title, author, description, genres, etc.)
- **User Input:** Users manually add ratings, reviews, reading statuses, and create collections
- **LLM Chatbot Data:** AI-driven insights and recommendations for book summaries and discussions

## Labor Division
- **Sophie Nguyen:** API development, database design, authentication, and project management
- **Harry Cao:** Developing and integrating the LLM-powered chatbot for book recommendations and discussions
- **Quoc Bao Le:** React UI development, Tailwind CSS styling, and API integration with frontend

## Project Timeline
### **Week 1: Planning & Setup**
- Finalize tech stack and database schema
- Set up GitHub repository and development environment
- Build basic UI components
- Set up PostgreSQL database and Node.js backend

### **Week 2: Core Feature Implementation**
- Implement user authentication (signup, login, logout)
- Develop CRUD operations for books and collections
- Connect frontend with backend via REST API

### **Week 3-4: Advanced Features**
- Implement search and filtering for books
- Integrate Google Books API for fetching book data
- Begin chatbot integration (basic responses)

### **Week 5: Testing & Refinements**
- Improve chatbot accuracy with better recommendations
- Conduct frontend and backend testing
- Optimize UI/UX for better user experience

### **Week 6: Presentation & Final Testing**
- Conduct final testing
- Prepare project demo and documentation
- Final code review and UI polish

## Database Schema
### **USER Table**
```
user_id (INTEGER, PRIMARY KEY, AUTO_INCREMENT)
username (VARCHAR, UNIQUE, NOT NULL)
email (VARCHAR, UNIQUE, NOT NULL)
password_hash (VARCHAR, NOT NULL)
```

### **BOOK Table**
```
book_id (INTEGER, PRIMARY KEY, AUTO_INCREMENT)
title (VARCHAR, NOT NULL)
author (VARCHAR, NOT NULL)
genre (VARCHAR)
description (TEXT)
```

### **USER_BOOK Table** (Tracks user interactions with books)
```
user_id (INTEGER, FOREIGN KEY REFERENCES USER(user_id))
book_id (INTEGER, FOREIGN KEY REFERENCES BOOK(book_id))
rating (INTEGER CHECK BETWEEN 1 AND 5)
review (TEXT)
reading_status (VARCHAR CHECK IN ('reading', 'finished', 'to-read'))
book_created (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
date_read (DATE)
```

### **COLLECTION Table** (User-created book collections)
```
collection_id (INTEGER, PRIMARY KEY, AUTO_INCREMENT)
user_id (INTEGER, FOREIGN KEY REFERENCES USER(user_id))
name (VARCHAR, NOT NULL)
description (TEXT)
```

### **COLLECTION_BOOK Table** (Associates books with collections)
```
collection_id (INTEGER, FOREIGN KEY REFERENCES COLLECTION(collection_id))
book_id (INTEGER, FOREIGN KEY REFERENCES BOOK(book_id))
```

## LLM Chatbot Using DeepSeek-R1
### **Model Integration**
- The chatbot processes user inputs and generates book recommendations, summaries, or analyses.
- **Why DeepSeek?** It is a powerful, cost-effective LLM solution.

### **Data Sources**
- **User Reading History:** Past books read, ratings, reviews, and genres of interest
- **Google Books API:** Enriches responses with book metadata

### **Logic Flow**
1. User queries the chatbot (e.g., "Recommend books based on my reading history")
2. Backend retrieves user preferences and book data
3. Data is formatted into a structured prompt and sent to DeepSeek API
4. DeepSeek API generates a response
5. Response is sent to the frontend and displayed in the chatbot UI

### **Chatbot Functionalities**
- **Book Recommendations:** Suggests books based on user history, genre preferences, and ratings.
  - Example: *"Suggest books similar to ‘The Great Gatsby’."*
- **Book Summaries:** Generates concise summaries.
  - Example: *"Give me a summary of ‘1984’ by George Orwell."*
- **Discussion & Reviews:** Analyzes themes and generates discussion questions.
  - Example: *"What are the major themes in ‘To Kill a Mockingbird’?"*
- **User Learning & Adaptation:** Refines recommendations based on feedback.
  - Example: If a user dislikes a book, future recommendations adjust accordingly.

## Installation & Setup
### **Backend Setup**
1. Clone the repository:
   ```sh
   git clone https://github.com/SophieNguyen113/Bookfolio.git
   cd Bookfolio
   ```
2. Install dependencies:
   ```sh
   cd server
   npm install
   ```
3. Create `.env` file:
   ```sh
   PG_CONNECTION_STRING=
   GITHUB_CLIENT_ID=
   GITHUB_CLIENT_SECRET=
   SESSION_SECRET=
   ```
4. Start the backend server:
   ```sh
   npm run start
   ```

### **Frontend Setup**
1. Navigate to the frontend directory:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create `.env` file:
   ```sh
   VITE_API_KEY=
   VITE_PUBLIC_DEEPSEEK_API_KEY=
   ```
4. Start the frontend server:
   ```sh
   npm run dev
   ```
