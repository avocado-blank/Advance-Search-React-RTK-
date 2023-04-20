import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { USER_API } from '../../Globalapi'
export const LogoutApi = createAsyncThunk('user/logout', async (logoutData) => {
  console.log(logoutData.id)
  console.log(logoutData.token)
  const response = await axios.post(
    `${USER_API}/logout?user_id=${logoutData.id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${logoutData.token}`,
      },
    },
  )
  console.log(response.data)
  return response.data
})
