import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API } from '../../../Globalapi'
export const CarMakeApi = createAsyncThunk('cars/carMake', async () => {
  const response = await axios.get(`${BASE_API}/carmakes`)
  console.log(response.data)
  return response.data
})
