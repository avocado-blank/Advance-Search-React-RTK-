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
import { RegisterUserApi, resetDefault } from '../features/Auth/RegisterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setphone } from '../features/Auth/CheckOTPSlice'

const Register = () => {
  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }
  const headerStyle = { margin: 0 }
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [alert, setAlert] = useState(false)
  const { items, error } = useSelector((store) => store.userReg)
  console.log(items?.otp)
  const userdata = {
    name,
    phone,
  }
  const navigate = useNavigate()

  useEffect(() => {
    if (!error) {
      navigate('/OTP')
      dispatch(resetDefault())
    }
  }, [error])

  const submitHandler = (e) => {
    e.preventDefault()
    if (phone.length > 11 || phone.length < 10) {
      setAlert(true)
    } else {
      dispatch(RegisterUserApi(userdata))
      setAlert(false)
    }
  }
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center" marginBottom={2}>
          <h2 style={headerStyle}>Account Register</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={submitHandler}>
          <Stack direction="column" spacing={2}>
            <TextField
              fullWidth
              label="Name"
              placeholder="Enter your name"
              value={name}
              required
              autoComplete="off"
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
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
            <Button type="submit" variant="contained" color="primary">
              Create Account
            </Button>
          </Stack>
        </form>
      </Paper>
    </Grid>
  )
}

export default Register
