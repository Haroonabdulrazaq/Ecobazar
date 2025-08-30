import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItems = state.items.find(
        item => item.id === action.payload.id
      );

      if (existingItems) {
        existingItems.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const existingItems = state.items.find(
        item => item.id === action.payload
      );

      if (existingItems) {
        existingItems.quantity -= 1;
      }
      if (existingItems && existingItems.quantity === 0) {
        state.items = state.items.filter(item => item.id !== action.payload);
        return;
      }
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

// Selectors
export const selectAllCartItems = (state: { cart: CartState }) =>
  state.cart.items;
export const selectCartItemCount = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
