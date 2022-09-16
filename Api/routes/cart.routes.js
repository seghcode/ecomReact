const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const {
  verifyTokenAndAuthorize,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken.routes");

// create cart
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update cart
router.put("/:id", verifyTokenAndAuthorize, async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE Cart
router.delete("/:id", verifyTokenAndAuthorize, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been Deleted!!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET user cart
router.get("/find/:userId", verifyTokenAndAuthorize, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all carts
router.get("/find", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
