import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  status: null,
  token: null,
  userid: null,
  items: [],
  error: true,
  phone: null,
}

export const CheckOTPApi = createAsyncThunk('users/check', async (userdata) => {
  const response = await axios.post(
    'http://192.168.100.8:8080/api/v1/user/check-otp',
    userdata,
  )
  return response.data
})

const CheckOTPReducer = createSlice({
  name: 'checkOTP',
  initialState,
  reducers: {
    resetDefault(state, action) {
      state.error = true
    },
    storeToken(state, action) {
      state.token = action.payload.data.auth_token
    },
    setphone(state, { payload }) {
      state.phone = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CheckOTPApi.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(CheckOTPApi.fulfilled, (state, action) => {
      state.status = 'success'
      state.items = action.payload
      state.error = action.payload.error
      if ('data' in action.payload) {
        state.token = action.payload.data.auth_token
        state.userid = action.payload.data.user_id
        localStorage.setItem('data', JSON.stringify(action.payload))
      }
      console.log(action.payload)
    })
    builder.addCase(CheckOTPApi.rejected, (state) => {
      state.status = 'rejected'
    })
  },
})

export default CheckOTPReducer.reducer
export const { storeToken, resetDefault, setphone } = CheckOTPReducer.actions
