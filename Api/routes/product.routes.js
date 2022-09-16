const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const {
  verifyTokenAndAuthorize,
  verifyTokenAndAdmin,
} = require("./verifyToken.routes");

// create Product
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
// update Product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE Product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been Deleted!!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET Product
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL PRODUCTS
router.get("/find", verifyTokenAndAdmin, async (req, res) => {
  const queryNew = req.query.new;
  const queryCategory = req.query.category;
  try {
    let products;

    if (queryNew) {
      products = await Product.find().sort({ createdAt: "desc" }).limit(5);
    } else if (queryCategory) {
      products = await Product.find({
        categories: {
          $in: queryCategory,
        },
      });
    } else {
      await Product.find();
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
