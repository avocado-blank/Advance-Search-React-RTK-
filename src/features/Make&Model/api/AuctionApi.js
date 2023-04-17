import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API } from '../../../Globalapi'
export const AuctionApi = createAsyncThunk('cars/auction', async () => {
  const response = await axios.get(`${BASE_API}/auction_types`)
  console.log(response.data)
  return response.data
})
