// server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Loads environment variables from .env

const app = express();

// Allow requests from the Vue dev server (default port 8080)
app.use(cors());
app.use(express.json());

// 1) Example route to send email
app.post('/api/sendEmail', async (req, res) => {
  // Destructure the form data from the request body
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587, // TLS port
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // e.g. yourgmail@gmail.com
        pass: process.env.EMAIL_PASS, // e.g. an app-specific password if 2FA is on
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'cleaniverseLTD@gmail.com',
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

// 2) Example route for Stripe checkout session (optional)
app.post('/create-checkout-session', async (req, res) => {
  // Your Stripe code here, if needed
  // ...
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
