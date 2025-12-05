require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const crypto = require('crypto')

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// --- DATABASE CONNECTION ---
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('🔌 Connected to the Upside Down (MongoDB)'))
  .catch(err => console.error('Connection Error:', err));

// --- THE SCHEMA ---
const MessageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  publicId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', MessageSchema);

// --- ROUTES ---

// 1. SAVE the message
app.post('/api/messages', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Message is empty!' });

    const randomCode = crypto.randomBytes(8).toString('hex'); 
    
    const newMessage = new Message({ 
      text,
      publicId: randomCode // Save the public code
    });
    
    await newMessage.save();

    res.json({ code: randomCode });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send signal.' });
  }
});

// 2. FETCH the message
app.get('/api/messages/:code', async (req, res) => {
  try {
    // Find One by publicId
    const message = await Message.findOne({ publicId: req.params.code });
    
    if (!message) return res.status(404).json({ error: 'Signal lost.' });

    res.json({ text: message.text });
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving signal.' });
  }
});

// --- START ---
app.listen(PORT, () => {
  console.log(`💡 Server flickering on http://localhost:${PORT}`);
});