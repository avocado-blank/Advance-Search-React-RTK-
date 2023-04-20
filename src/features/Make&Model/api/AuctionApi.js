import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API } from '../../../Globalapi'

export const AuctionApi = createAsyncThunk('cars/auction', async (data) => {
  console.log(data.id)
  console.log(data.token)
  const response = await axios.get(
    `${BASE_API}/user/auction_types?user_id=${data.id}`,
    {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    },
  )
  console.log(response.data)
  return response.data
})
