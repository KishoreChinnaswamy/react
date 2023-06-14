import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      const itemExists = state.items.find((item) => item.id === newItem.id);
      if (!itemExists) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          name: newItem.name,
          totalPrice: newItem.price,
        });
      } else {
        itemExists.quantity++;
        itemExists.totalPrice = itemExists.totalPrice + newItem.price;
      }
    },

    removeItemFromCart(state, action) {
      state.totalQuantity--;
      const itemId = action.payload;
      const itemExists = state.items.find((item) => item.id === itemId);
      if (itemExists.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemExists.id);
      } else {
        itemExists.quantity--;
        itemExists.totalPrice = itemExists.totalPrice - itemExists.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
