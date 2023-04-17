import { configureStore } from '@reduxjs/toolkit'
import CarMakeReducer from './features/Make&Model/api/CarMakeSlice'
const store = configureStore({
  reducer: {
    carList: CarMakeReducer,
  },
})

export default store
