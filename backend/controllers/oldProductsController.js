const OldProduct = require('../models/oldProducts');

const getAllOldProducts = async (req, res) => {
  try {
    const sortValue = req.query.sortValue || 1; 
    const search = req.query.searchValue || '';
    const searchRegex = new RegExp(search, 'i'); 
    const oldProducts = await OldProduct.find({ productName: searchRegex }).select('-_id -__v')
      .sort({ expectedPrice: parseInt(sortValue) });

    res.status(200).json(oldProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getOldProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const oldProduct = await OldProduct.findOne({productId}).select('-_id -__v');

    if (!oldProduct) {
      res.status(404).json({ message: 'Cannot find any product' });
    } else {
      res.status(200).json(oldProduct);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const oldProduct = await OldProduct.create(req.body);
    res.status(200).json({ message: 'Product added successfully' });
  } catch (error) {
    console.log("error is",error);
    res.status(500).json({ message: error.message });
  }
};

const updateOldProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const oldProduct = await OldProduct.findOneAndUpdate({productId}, req.body, { new: true });

    if (!oldProduct) {
      res.status(404).json({ message: 'Cannot find any product' });
    } else {
      res.status(200).json({ message: 'Product updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOldProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const oldProduct = await OldProduct.findOneAndDelete({productId});

    if (!oldProduct) {
      res.status(404).json({ message: 'Cannot find any product' });
    } else {
      res.status(200).json({ message: 'Product deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getOldProductsBySellerId = async (req, res) => {
  try {
    const {userId} = req.params;
    const search = req.query.searchValue || ''; // Default to empty string if not provided
    const searchRegex = new RegExp(search, 'i'); // Case-insensitive search regex

    const oldProducts = await OldProduct.find({ userId: userId, productName: searchRegex }).select('-_id -__v')

    res.status(200).json(oldProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllOldProducts,
  getOldProductById,
  addProduct,
  updateOldProduct,
  deleteOldProduct,
  getOldProductsBySellerId
};
