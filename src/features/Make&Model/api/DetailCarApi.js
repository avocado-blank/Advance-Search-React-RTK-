import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API } from '../../../Globalapi'
export const DetailCarApi = createAsyncThunk(
  'cars/searchCarMake',
  async (id) => {
    const response = await axios.get(`${BASE_API}/carmakes/${id}`)
    console.log(response.data)
    return response.data
  },
)
