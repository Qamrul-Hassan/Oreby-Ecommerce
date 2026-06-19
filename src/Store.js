import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './components/slice/ProductSlice'

export default configureStore({
  reducer: {
    product: ProductSlice,
  },
})