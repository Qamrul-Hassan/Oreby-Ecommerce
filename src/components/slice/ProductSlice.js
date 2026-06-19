import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItem.findIndex((item) => item.id == action.payload.id)
      if (findProduct !== -1) {
        state.cartItem[findProduct].Qty += 1
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      } else {
        state.cartItem = [...state.cartItem, action.payload]
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }
    },
    qtyIncrement : (state, action)=>{
      state.cartItem[action.payload].Qty += 1
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },
    qtyDecrement : (state, action)=>{
      if(state.cartItem[action.payload].Qty >= 2){
        state.cartItem[action.payload].Qty -= 1
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }
    },
    cartItemDelete : (state, action) => {
      state.cartItem.splice(action.payload, 1)
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    }
  },
})

export const { addToCart, qtyIncrement, qtyDecrement, cartItemDelete } = ProductSlice.actions

export default ProductSlice.reducer