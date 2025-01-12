require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Stripe secret key
const cors = require('cors'); // To handle requests from frontend

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Create a checkout session
app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'], // Payment methods allowed
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Cleaning Service',
              description: 'Professional cleaning for your home or office.',
            },
            unit_amount: 5000, // Price in cents ($50.00)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/payment-success`,
      cancel_url: `${req.headers.origin}/payment-cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

// Start the server
const PORT = 4242;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
