import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API } from '../../../Globalapi'
export const CarMakeApi = createAsyncThunk('cars/carMake', async (data) => {
  const response = await axios.get(
    `${BASE_API}/user/carmakes?user_id=${data.id}`,
    {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    },
  )
  console.log(response.data)
  return response.data
})
