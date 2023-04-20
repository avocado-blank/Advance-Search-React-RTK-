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
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LoginApi } from '../features/Auth/LoginApi'
import { resetDefault, setphone } from '../features/Auth/AuthSlice'

const Login = () => {
  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }
  const headerStyle = { margin: 0 }
  const dispatch = useDispatch()

  const [phone, setPhone] = useState('')
  const [alert, setAlert] = useState(false)
  const { error, status } = useSelector((store) => store.Auth)
  const navigate = useNavigate()
  const loginData = {
    phone: phone,
  }
  useEffect(() => {
    if (!error) {
      navigate('/OTP')
      dispatch(resetDefault())
    }
  }, [error])

  const submitHandler = () => {
    if (phone.length < 12 && phone.length > 6) {
      dispatch(LoginApi(loginData))
      setAlert(false)
    } else {
      setAlert(true)
      setTimeout(() => setAlert(false), 1500)
    }
  }
  return (
    <Grid sx={{ margin: '200px 0' }}>
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
            type="tel"
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
          <Link to="/register">
            <Typography>Create an account?</Typography>
          </Link>
          <Button
            onClick={submitHandler}
            variant="contained"
            color="primary"
            disabled={status === 'pending' ? true : false}
          >
            Log in
          </Button>
        </Stack>
      </Paper>
    </Grid>
  )
}

export default Login
