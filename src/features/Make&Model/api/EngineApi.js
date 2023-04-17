import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API } from '../../../Globalapi'
export const EngineApi = createAsyncThunk('cars/engine', async () => {
  const response = await axios.get(`${BASE_API}/engine-sizes`)
  console.log(response.data)
  return response.data
})
