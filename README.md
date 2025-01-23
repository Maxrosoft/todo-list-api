# Todo List API

## Overview
The Todo List API is a simple backend application for managing todos and user authentication. It supports CRUD operations for todos and includes user signup and signin functionalities with JWT-based authentication.

## Features
- Create, read, update, and delete todos.
- User authentication with signup and signin endpoints.
- Pagination support for listing todos.
- JWT-based authentication for secure API access.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Maxrosoft/todo-list-api.git
   cd todo-list-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=your_port
   TOKEN_SECRET=your_jwt_secret
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000` by default.

