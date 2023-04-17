import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API } from '../../../Globalapi'
export const DamageApi = createAsyncThunk('cars/damage', async () => {
  const response = await axios.get(`${BASE_API}/damages`)
  console.log(response.data)
  return response.data
})
