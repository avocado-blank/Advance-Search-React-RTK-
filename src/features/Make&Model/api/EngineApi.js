import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API } from '../../../Globalapi'
export const EngineApi = createAsyncThunk('cars/engine', async (data) => {
  const response = await axios.get(
    `${BASE_API}/user/engine-sizes?user_id=${data.id}`,
    {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    },
  )
  console.log(response.data)
  return response.data
})
