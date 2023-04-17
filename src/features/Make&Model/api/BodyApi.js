import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API } from '../../../Globalapi'
export const BodyApi = createAsyncThunk('cars/body', async () => {
  const response = await axios.get(`${BASE_API}/bodytypes`)
  console.log(response.data)
  return response.data
})
