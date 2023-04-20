import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API } from '../../../Globalapi'
export const DetailCarApi = createAsyncThunk(
  'cars/searchCarMake',
  async (data) => {
    const response = await axios.get(
      `${BASE_API}/user/carmakes/${data.carid}?user_id=${data.id}`,
      {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      },
    )
    console.log(response.data)
    return response.data
  },
)
