require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Stripe secret key from .env
const cors = require('cors'); // Middleware for handling CORS

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Allow requests from frontend

// Endpoint to create a checkout session
app.post('/create-checkout-session', async (req, res) => {
  const { lineItems, successUrl, cancelUrl } = req.body; // Destructure data from frontend
  try {
    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'], // Allowed payment methods
      line_items: lineItems, // Pass dynamic line items
      mode: 'payment', // Payment mode
      success_url: successUrl || `${req.headers.origin}/payment-success`, // Redirect on success
      cancel_url: cancelUrl || `${req.headers.origin}/payment-cancel`, // Redirect on cancel
    });

    // Send the session ID back to the client
    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error.message);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Start the server
const PORT = process.env.PORT || 4242; // Use PORT from .env or default to 4242
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
