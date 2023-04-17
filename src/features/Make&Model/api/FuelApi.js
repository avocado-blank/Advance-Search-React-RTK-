import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API } from '../../../Globalapi'
export const FuelApi = createAsyncThunk('cars/fuel', async () => {
  const response = await axios.get(`${BASE_API}/fueltypes`)
  console.log(response.data)
  return response.data
})
