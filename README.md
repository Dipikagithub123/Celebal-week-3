# Callbacks vs. Promises: An Interactive Demonstration

This project provides a clear, side-by-side comparison of two fundamental asynchronous patterns in JavaScript: the traditional **callback pattern** and the modern **Promises with Async/Await**.

It features a simple Node.js backend and a dynamic, interactive frontend to showcase how these patterns handle asynchronous operations, including both success and failure scenarios. The goal is to visually and practically demonstrate the improvements in readability, error handling, and code structure that Promises and `async/await` offer over callbacks.

---

## ✨ Key Features

- **Interactive UI**: A modern, responsive frontend with an animated background and clear visual feedback for success and error states.
- **Node.js Server**: A lightweight backend built with the native `http` module to serve the frontend and handle API requests.
- **Callback Endpoint (`/callback`)**: An API endpoint that simulates an asynchronous operation using the traditional callback pattern.
- **Promise Endpoint (`/promise`)**: An API endpoint that performs the same operation but uses Promises and `async/await` for cleaner, more modern code.
- **Live Demonstration**: Users can click buttons to trigger both patterns and see the results in real-time, illustrating how each handles success and random failure.

---

## 📸 Screenshots

Here's what the application looks like in action.

*The main interface with a smooth, animated gradient background.*
![Application Screenshot](./screenshots/screenshot.png)

---

## 🚀 How to Run the Project

To get this project running locally, follow these simple steps.

### Prerequisites

You must have [Node.js](https://nodejs.org/) installed on your machine (which includes `npm`).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd your-repository-name
    ```

3.  **Start the server:**
    ```bash
    node server.js
    ```
    The terminal should display the message: `Server running at http://localhost:3000/`.

4.  **Open in your browser:**
    Open your web browser and navigate to `http://localhost:3000`.

You can now interact with the application and see the two asynchronous patterns in action!

---

## 🛠️ Technologies Used

- **Backend**: Node.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Core Concepts**: Callbacks, Promises, Async/Await, Fetch API 