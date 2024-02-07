const mongoose = require('mongoose');

const oldProductSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(), // Auto-generate ObjectId for productId
    unique: true,
  },
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  expectedPrice: {
    type: Number, // Price per day in USD
    required: true,
  },
  dateOfPurchase: {
    type: Date,
    required: true,
  },
  negotiation: {
    type: Boolean,
    required: true,
  }
});

const OldProduct = mongoose.model('OldProduct', oldProductSchema);

module.exports = OldProduct;