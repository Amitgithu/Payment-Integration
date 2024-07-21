require("dotenv").config(); // Load environment variables from .env file
const express = require("express"); // Import Express.js
const app = express(); // Create an Express application
const cors = require("cors"); // Import CORS middleware
const stripe = require("stripe")("YOUR_STRIPE_SECRET_KEY"); // Initialize Stripe with secret key

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Middleware to enable CORS

// Checkout API route
app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body; // Extract products from request body

    // Map products to Stripe line items format
    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr", // Currency code
            product_data: {
                name: product.dish, // Product name
                images: [product.imgdata] // Product image
            },
            unit_amount: product.price * 100, // Product price in smallest currency unit (e.g., paise for INR)
        },
        quantity: product.qnty // Product quantity
    }));

    // Create a new checkout session with Stripe
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"], // Payment methods allowed
        line_items: lineItems, // Line items for the session
        mode: "payment", // Mode of the session (payment)
        success_url: "http://localhost:3000/success", // URL to redirect to upon successful payment
        cancel_url: "http://localhost:3000/cancel", // URL to redirect to if payment is canceled
    });

    // Respond with the session ID
    res.json({ id: session.id });
});

// Start the server on port 7000
app.listen(7000, () => {
    console.log("server start"); // Log message indicating server has started
});
