import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { USER_API } from '../../Globalapi'
export const LoginApi = createAsyncThunk('user/login', async (loginData) => {
  console.log(loginData.phone)
  const response = await axios.post(`${USER_API}/login`, loginData)
  console.log(response.data)
  return response.data
})
