import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CheckOTPApi } from '../features/Auth/CheckOTPApi'
import { resetDefault } from '../features/Auth/AuthSlice'

const OTPpage = () => {
  const { error, status, phone } = useSelector((store) => store.Auth)
  const dispatch = useDispatch()
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const [thirdValue, setThirdValue] = useState('')
  const [fourthValue, setFourthValue] = useState('')
  const [fifthValue, setFifthValue] = useState('')
  const [sixthValue, setSixthValue] = useState('')
  const firstRef = useRef()
  const secondRef = useRef(null)
  const thirdRef = useRef(null)
  const fourthRef = useRef(null)
  const fifthRef = useRef(null)
  const sixthRef = useRef(null)
  const navigate = useNavigate()
  let OTPName = `${firstValue}${secondValue}${thirdValue}${fourthValue}${fifthValue}${sixthValue}`
  const checkData = {
    phone: phone,
    otp: OTPName,
  }
  const handleChangeFirst = (event) => {
    const inputValue = event.target.value
    setFirstValue(inputValue)
    if (inputValue !== '') {
      secondRef.current.focus()
    }
  }
  const handleChangeSecond = (event) => {
    const inputValue = event.target.value
    setSecondValue(inputValue)
    if (inputValue !== '') {
      thirdRef.current.focus()
    }
    if (event.key === 'Backspace' || inputValue === '') {
      firstRef.current.focus()
    }
  }
  const handleChangeThird = (event) => {
    const inputValue = event.target.value
    setThirdValue(inputValue)
    if (inputValue !== '') {
      fourthRef.current.focus()
    }
    if (event.key === 'Backspace' || inputValue === '') {
      secondRef.current.focus()
    }
  }
  const handleChangeFourth = (event) => {
    const inputValue = event.target.value
    setFourthValue(inputValue)
    if (inputValue !== '') {
      fifthRef.current.focus()
    }
    if (event.key === 'Backspace' || inputValue === '') {
      thirdRef.current.focus()
    }
  }
  const handleChangeFifth = (event) => {
    const inputValue = event.target.value
    setFifthValue(inputValue)
    if (inputValue !== '') {
      sixthRef.current.focus()
    }
    if (event.key === 'Backspace' || inputValue === '') {
      fourthRef.current.focus()
    }
  }
  const handleChangeSixth = (event) => {
    const inputValue = event.target.value
    setSixthValue(inputValue)
    if (event.key === 'Backspace' || inputValue === '') {
      fifthRef.current.focus()
    }
  }
  const submitHandler = () => {
    dispatch(CheckOTPApi(checkData))
  }
  useEffect(() => {
    if (!error) {
      navigate('/')
      dispatch(resetDefault())
    }
  }, [error, dispatch, navigate])

  return (
    <Paper
      sx={{
        width: '700px',
        margin: '250px auto',
        height: '150px',
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Stack direction="row" spacing={1} m={2} alignItems="center">
          <TextField
            inputRef={firstRef}
            sx={{ width: 60, textAlign: 'center' }}
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
            inputRef={secondRef}
            sx={{ width: 60, textAlign: 'center' }}
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
            inputRef={thirdRef}
            sx={{ width: 60, textAlign: 'center' }}
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
            inputRef={fourthRef}
            sx={{ width: 60, textAlign: 'center' }}
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
            inputRef={fifthRef}
            sx={{ width: 60, textAlign: 'center' }}
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
            inputRef={sixthRef}
            sx={{ width: 60, textAlign: 'center' }}
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
          disabled={status === 'pending' ? true : false}
        >
          Log In
        </Button>
      </Stack>
    </Paper>
  )
}

export default OTPpage
