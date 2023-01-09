/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProducts } from '@shared/interfaces/IProducts';

export interface CartState {
  value: number;
  cart: IProducts[];
}

const initialState = {
  value: 0,
  cart: [],
} as CartState;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addToCart(state, action: PayloadAction<IProducts>) {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (!itemInCart) {
        // Add the item to the cart array
        state.cart.push(action.payload);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
