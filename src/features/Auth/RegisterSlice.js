import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  status: null,
  items: [],
  error: true,
}

export const RegisterUserApi = createAsyncThunk(
  'users/userRegister',
  async (userdata) => {
    const response = await axios.post(
      'http://192.168.100.8:8080/api/v1/user/register',
      userdata,
    )
    return response.data
  },
)

const RegisterReducer = createSlice({
  name: 'userRegister',
  initialState,
  reducers: {
    resetDefault(state, action) {
      state.items = []
      state.error = true
    },
  },
  extraReducers: (builder) => {
    builder.addCase(RegisterUserApi.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(RegisterUserApi.fulfilled, (state, action) => {
      state.status = 'success'
      state.items = action.payload
      state.error = action.payload.error
      console.log(action.payload)
    })
    builder.addCase(RegisterUserApi.rejected, (state) => {
      state.status = 'rejected'
    })
  },
})

export default RegisterReducer.reducer
export const { resetDefault } = RegisterReducer.actions
