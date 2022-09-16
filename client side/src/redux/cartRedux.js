import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: {
    products: [],
    productQuantity: 0,
    totalPrice: 0,
  },
  name: "cart",
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.productQuantity += 1;
      state.totalPrice += action.payload.price * action.payload.itemQuantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
