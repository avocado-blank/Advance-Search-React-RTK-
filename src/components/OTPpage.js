import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CheckOTPApi, resetDefault } from '../features/Auth/CheckOTPSlice'
import { useNavigate } from 'react-router-dom'

const OTPpage = () => {
  const { phone } = useSelector((store) => store.OTPCheck)
  const { items, error } = useSelector((store) => store.OTPCheck)
  const dispatch = useDispatch()
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const [thirdValue, setThirdValue] = useState('')
  const [fourthValue, setFourthValue] = useState('')
  const [fifthValue, setFifthValue] = useState('')
  const [sixthValue, setSixthValue] = useState('')
  const navigate = useNavigate()

  let OTPName = `${firstValue}${secondValue}${thirdValue}${fourthValue}${fifthValue}${sixthValue}`
  const userdata = {
    phone: phone,
    otp: OTPName,
  }
  const handleChangeFirst = (event) => {
    const inputValue = event.target.value
    setFirstValue(inputValue)
  }
  const handleChangeSecond = (event) => {
    const inputValue = event.target.value
    setSecondValue(inputValue)
  }
  const handleChangeThird = (event) => {
    const inputValue = event.target.value
    setThirdValue(inputValue)
  }
  const handleChangeFourth = (event) => {
    const inputValue = event.target.value
    setFourthValue(inputValue)
  }
  const handleChangeFifth = (event) => {
    const inputValue = event.target.value
    setFifthValue(inputValue)
  }
  const handleChangeSixth = (event) => {
    const inputValue = event.target.value
    setSixthValue(inputValue)
  }
  const submitHandler = () => {
    dispatch(CheckOTPApi(userdata))
  }
  useEffect(() => {
    if (!error) {
      navigate('/')
      dispatch(resetDefault())
    }
  }, [error, dispatch, navigate])
  console.log(items)

  return (
    <Paper sx={{ width: '700px', margin: '10px auto', height: '150px' }}>
      <Stack alignItems="center" justifyContent="center">
        <Stack direction="row" spacing={1} m={2} alignItems="center">
          <TextField
            sx={{ width: 60 }}
            variant="outlined"
            value={firstValue}
            onChange={handleChangeFirst}
            inputProps={{
              inputMode: 'numeric',
              pattern: '[0-9]*',
              maxLength: 1,
            }}
            autoComplete="off"
          />
          <Typography variant="span" sx={{ opacity: 0.7 }}>
            -
          </Typography>
          <TextField
            sx={{ width: 60 }}
            variant="outlined"
            value={secondValue}
            onChange={handleChangeSecond}
            inputProps={{
              inputMode: 'numeric',
              pattern: '[0-9]*',
              maxLength: 1,
            }}
            autoComplete="off"
          />
          <Typography variant="span" sx={{ opacity: 0.7 }}>
            -
          </Typography>
          <TextField
            sx={{ width: 60 }}
            variant="outlined"
            value={thirdValue}
            onChange={handleChangeThird}
            inputProps={{
              inputMode: 'numeric',
              pattern: '[0-9]*',
              maxLength: 1,
            }}
            autoComplete="off"
          />
          <Typography variant="span" sx={{ opacity: 0.7 }}>
            -
          </Typography>
          <TextField
            sx={{ width: 60 }}
            variant="outlined"
            value={fourthValue}
            onChange={handleChangeFourth}
            inputProps={{
              inputMode: 'numeric',
              pattern: '[0-9]*',
              maxLength: 1,
            }}
            autoComplete="off"
          />
          <Typography variant="span" sx={{ opacity: 0.7 }}>
            -
          </Typography>
          <TextField
            sx={{ width: 60 }}
            variant="outlined"
            value={fifthValue}
            onChange={handleChangeFifth}
            inputProps={{
              inputMode: 'numeric',
              pattern: '[0-9]*',
              maxLength: 1,
            }}
            autoComplete="off"
          />
          <Typography variant="span" sx={{ opacity: 0.7 }}>
            -
          </Typography>
          <TextField
            sx={{ width: 60 }}
            variant="outlined"
            value={sixthValue}
            onChange={handleChangeSixth}
            inputProps={{
              inputMode: 'numeric',
              pattern: '[0-9]*',
              maxLength: 1,
            }}
            autoComplete="off"
          />
        </Stack>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={submitHandler}
        >
          Log In
        </Button>
      </Stack>
    </Paper>
  )
}

export default OTPpage