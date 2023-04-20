import { createSlice } from '@reduxjs/toolkit'
import { RegisterApi } from './RegisterApi'
import { CheckOTPApi } from './CheckOTPApi'
import { LoginApi } from './LoginApi'
import { LogoutApi } from './LogoutApi'

const initialState = {
  status: null,
  items: [],
  error: true,
  user_id: null,
  token: null,
  phone: null,
}

const AuthReducer = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    resetDefault(state, action) {
      state.error = true
      state.status = null
    },
    setphone(state, { payload }) {
      state.phone = payload
    },
    storeToken(state, action) {
      state.token = action.payload.data.auth_token
    },
  },
  extraReducers: (builder) => {
    builder.addCase(RegisterApi.pending, (state, { payload }) => {
      state.status = 'pending'
    })
    builder.addCase(RegisterApi.fulfilled, (state, { payload }) => {
      state.status = 'success'
      state.items = payload
      state.error = payload.error
    })
    builder.addCase(LoginApi.pending, (state, { payload }) => {
      state.status = 'pending'
    })
    builder.addCase(LoginApi.fulfilled, (state, { payload }) => {
      state.status = 'success'
      state.items = payload
      state.error = payload.error
    })
    builder.addCase(LogoutApi.pending, (state, { payload }) => {
      state.status = 'pending'
    })
    builder.addCase(LogoutApi.fulfilled, (state, { payload }) => {
      state.status = 'success'
      state.error = true
      state.token = null
      state.user_id = null
      state.items = []
    })
    builder.addCase(CheckOTPApi.pending, (state, { payload }) => {
      state.status = 'pending'
    })
    builder.addCase(CheckOTPApi.fulfilled, (state, { payload }) => {
      state.status = 'success'
      state.items = payload
      state.error = payload.error
      if ('data' in payload) {
        state.token = payload.data.auth_token
        state.user_id = payload.data.id
        localStorage.setItem('data', JSON.stringify(payload))
      }
    })
  },
})

export default AuthReducer.reducer
export const { resetDefault, setphone, storeToken } = AuthReducer.actions
