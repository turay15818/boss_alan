/* eslint-disable prettier/prettier */
import React from 'react'

const Test = () => {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Test




const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  if (!req.session.loginAttempts) {
    req.session.loginAttempts = 0;
  }
  next();
});

app.post('/login', (req, res) => {
  if (req.session.loginAttempts >= 5) {
    return res.status(429).send('Too many login attempts. Please try again later.');
  }

  // Check login credentials
  // ...

  req.session.loginAttempts++;
  res.send('Logged in successfully.');
});
