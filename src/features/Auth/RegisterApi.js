import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { USER_API } from '../../Globalapi'
export const RegisterApi = createAsyncThunk(
  'user/register',
  async (registerData) => {
    const response = await axios.post(`${USER_API}/register`, registerData)
    console.log(response.data)
    return response.data
  },
)
