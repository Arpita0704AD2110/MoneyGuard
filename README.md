# 💰 MoneyGuard: Finance Management with Stock Prediction

MoneyGuard is a web-based application that integrates personal finance management with stock market prediction using machine learning. It allows users to track their income and expenses, analyze their financial trends through visual dashboards, and receive AI-powered next-day stock price forecasts. The goal of the project is to help users make smarter financial and investment decisions within a single platform.


## 🚀 Features

1. Secure user signup and login with AES-256 encryption
2. Add and manage income and expense transactions
3. Visual dashboard showing financial statistics and spending trends
4. Stock price prediction (Open and Close) for selected companies
5. Historical stock data visualization
6. Deployed on Render with HTTPS for secure access


## ⚙️ Technologies Used

1. Frontend: HTML, CSS, JavaScript, Bootstrap
2. Backend: Flask (Python)
3. Database: SQLite
4. Machine Learning: LSTM (Keras, TensorFlow), yfinance
5. Deployment: Render
6. Security: AES-256 Encryption, HTTPS


## 🧠 Data Structures Used

Several core data structures were used throughout the project. Dictionaries were used to store form data, transaction details, and JSON responses. Lists managed sequences of historical stock prices and transactions. Tuples were useful for handling grouped database records like (date, amount, type). For machine learning, NumPy arrays were used to reshape and normalize time-series data, and Pandas DataFrames helped in cleaning and manipulating stock data fetched from finance.


## 📉 Stock Prediction Module

The application uses the yfinance library to collect historical stock data. An LSTM model is trained on the past 60 days of stock prices to predict the next day's Open and Close values. Each supported stock (like AAPL, TSLA, AMZN, etc.) has its own trained model. Predictions are integrated into the web app and displayed to the user along with recent price trends for better investment insight.


## 🔐 Security Measures

User credentials are secured using AES-256 encryption, and the application runs over HTTPS to ensure secure data communication. Input validation is used across the platform to prevent unauthorized access or data manipulation.


## 📌 How to Run Locally

Clone the repository
Install required packages using pip install -r requirements.txt
Run the app using python app.py
Access the application at http://127.0.0.1:5000 in your browser
