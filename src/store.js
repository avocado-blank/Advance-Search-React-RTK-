import { configureStore } from '@reduxjs/toolkit'
import CarMakeReducer from './features/Make&Model/api/CarMakeSlice'
import AuthReducer from './features/Auth/AuthSlice'
const store = configureStore({
  reducer: {
    carList: CarMakeReducer,
    Auth: AuthReducer,
  },
})

export default store
