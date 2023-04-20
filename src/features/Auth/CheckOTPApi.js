import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { USER_API } from '../../Globalapi'
export const CheckOTPApi = createAsyncThunk(
  'user/checkOTP',
  async (checkData) => {
    console.log(checkData.phone)
    console.log(checkData.otp)
    const response = await axios.post(`${USER_API}/check-otp`, checkData)
    console.log(response.data)
    return response.data
  },
)
