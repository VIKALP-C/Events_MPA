/* const bodyParser = require('body-parser');
const express = require('express');

const eventRoutes = require('./routes/events');
const authRoutes = require('./routes/auth');  // if this exists

const app = express();

app.use(bodyParser.json());

// 🔥 CORS FIX
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

// your routes
app.use('/events', eventRoutes);
app.use(authRoutes); // or app.use('/auth', authRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});

app.listen(8080);
