import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API } from '../../../Globalapi'
export const SellerApi = createAsyncThunk('cars/seller', async () => {
  const response = await axios.get(`${BASE_API}/sellers`)
  console.log(response.data)
  return response.data
})
