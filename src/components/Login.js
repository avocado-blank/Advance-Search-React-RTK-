import React, { useState, useEffect } from 'react'
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  AlertTitle,
} from '@mui/material'
import { LoginApi, resetDefault } from '../features/Auth/LoginSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setphone } from '../features/Auth/CheckOTPSlice'

const Login = () => {
  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }
  const headerStyle = { margin: 0 }
  const dispatch = useDispatch()

  const [phone, setPhone] = useState('')
  const [alert, setAlert] = useState(false)
  const { items, error } = useSelector((store) => store.userLog)
  const navigate = useNavigate()
  const userdata = {
    phone: phone,
  }
  console.log(phone)
  useEffect(() => {
    if (!error) {
      navigate('/OTP')
      dispatch(resetDefault())
    }
  }, [error])

  const submitHandler = () => {
    if (phone.length > 11 || phone.length < 10) {
      setAlert(true)
    } else {
      dispatch(LoginApi(userdata))
      setAlert(false)
    }
  }
  console.log(items?.otp)
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center" marginBottom={2}>
          <h2 style={headerStyle}>Account Login</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to login an account !
          </Typography>
        </Grid>
        <Stack direction="column" spacing={2}>
          <TextField
            fullWidth
            label="Ph Number"
            placeholder="Enter your PhoneNumber"
            value={phone}
            autoComplete="off"
            required
            onChange={(e) => {
              setPhone(e.target.value)
              dispatch(setphone(e.target.value))
            }}
          />
          {alert && (
            <Alert severity="error">
              <AlertTitle>Note</AlertTitle>
              Please Type Correct PhoneNumber
            </Alert>
          )}
          {items && items.error && (
            <Alert severity="error">
              <AlertTitle>Note</AlertTitle>
              {items.message}
            </Alert>
          )}
          <Link to="/register">
            <Typography>Create an account?</Typography>
          </Link>
          <Button onClick={submitHandler} variant="contained" color="primary">
            Log in
          </Button>
        </Stack>
      </Paper>
    </Grid>
  )
}

export default Login
