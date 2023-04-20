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
import { useNavigate } from 'react-router-dom'
import { RegisterApi } from '../features/Auth/RegisterApi'
import { resetDefault, setphone } from '../features/Auth/AuthSlice'

const Register = () => {
  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }
  const headerStyle = { margin: 0 }
  const dispatch = useDispatch()
  const { error, status } = useSelector((store) => store.Auth)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [alert, setAlert] = useState(false)
  const registerData = {
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
    if (phone.length < 12 && phone.length > 6) {
      dispatch(RegisterApi(registerData))
      setAlert(false)
    } else {
      setAlert(true)
      setTimeout(() => setAlert(false), 1500)
    }
  }
  return (
    <Grid sx={{ margin: '150px 0' }}>
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={status === 'pending' ? true : false}
            >
              Create Account
            </Button>
          </Stack>
        </form>
      </Paper>
    </Grid>
  )
}

export default Register
