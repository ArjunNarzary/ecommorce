import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "CART",
  initialState,
  reducers: {
    ADD_TO_CARD: (state, action) => {
      if (!state.some((prod) => prod.id === action.payload.id)) {
        return [...state, action.payload];
      } else {
        return state.map((prod) => {
          if (prod.id === action.payload.id) {
            return { ...prod, quantity: prod.quantity + 1 };
          }
          return prod;
        });
      }
    },
    REMOVE_FROM_CART: (state, action) => {
      return state.filter((prod) => prod.id !== action.payload.id);
    },

    INCREASE_QANTITY: (state, action) => {
      return state.map((prod) => {
        if (prod.id === action.payload.id) {
          return { ...prod, quantity: prod.quantity + 1 };
        }
        return prod;
      });
    },
    DECREASE_QUANTITY: (state, action) => {
      const newState = state.map((prod) => {
        if (prod.id === action.payload.id) {
          if (prod.quantity > 1) {
            return { ...prod, quantity: prod.quantity - 1 };
          }
        } else {
          return prod;
        }
      });

      return newState.filter((prod) => prod !== undefined);
    },
    EMPTY_CART: () => {
      return initialState;
    },
  },
});

export const {
  ADD_TO_CARD,
  REMOVE_FROM_CART,
  INCREASE_QANTITY,
  DECREASE_QUANTITY,
  EMPTY_CART,
} = cartSlice.actions;

export default cartSlice.reducer;
