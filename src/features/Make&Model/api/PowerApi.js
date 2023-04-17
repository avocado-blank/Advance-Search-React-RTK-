import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API } from '../../../Globalapi'
export const PowerApi = createAsyncThunk('cars/power', async (id) => {
  const response = await axios.get(`${BASE_API}/powers/${id}`)
  // console.log(response.data)
  return response.data
})
