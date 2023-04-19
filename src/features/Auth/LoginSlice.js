import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  error: true,
  status: null,
}
export const LoginApi = createAsyncThunk('user/login', async (userdata) => {
  const response = await axios.post(
    'http://192.168.100.8:8080/api/v1/user/login',
    userdata,
  )
  console.log(response.data)
  return response.data
})

const LoginReducer = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    resetDefault(state, action) {
      state.error = true
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginApi.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(LoginApi.fulfilled, (state, action) => {
      state.status = 'success'
      state.items = action.payload
      state.error = action.payload.error
    })
    builder.addCase(LoginApi.rejected, (state, action) => {
      state.status = 'rejected'
    })
  },
})

export default LoginReducer.reducer
export const { resetDefault } = LoginReducer.actions
