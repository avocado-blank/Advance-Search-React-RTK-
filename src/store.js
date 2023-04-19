import { configureStore } from '@reduxjs/toolkit'
import CarMakeReducer from './features/Make&Model/api/CarMakeSlice'
import RegisterReducer from './features/Auth/RegisterSlice'
import LoginReducer from './features/Auth/LoginSlice'
import CheckOTPReducer from './features/Auth/CheckOTPSlice'
const store = configureStore({
  reducer: {
    carList: CarMakeReducer,
    userReg: RegisterReducer,
    userLog: LoginReducer,
    OTPCheck: CheckOTPReducer,
  },
})

export default store
