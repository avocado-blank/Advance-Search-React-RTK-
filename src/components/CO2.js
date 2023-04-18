import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCo2 } from '../features/Make&Model/api/CarMakeSlice'

const CO2 = ({
  Co2firstvalue,
  Co2secondvalue,
  setCo2FirstValue,
  setCo2SecondValue,
}) => {
  //Variables
  const { status } = useSelector((store) => store.carList)
  const [open, setOpen] = useState(false)
  let co2Name
  const dispatch = useDispatch()

  //Hook
  useEffect(() => {
    dispatch(setCo2(co2Name))
  }, [Co2firstvalue, Co2secondvalue])
  //functions
  const handleClick = () => {
    setOpen(!open)
  }
  const handleChangeFirst = (event) => {
    const inputValue = event.target.value
    if (/^\d+$/.test(inputValue) && inputValue >= 1 && inputValue <= 999) {
      setCo2FirstValue(inputValue)
    } else if (inputValue === '') {
      setCo2FirstValue('')
    }
  }

  const handleChangeSecond = (event) => {
    const inputValue = event.target.value
    if (/^\d+$/.test(inputValue) && inputValue >= 1 && inputValue <= 999) {
      setCo2SecondValue(inputValue)
    } else if (inputValue === '') {
      setCo2SecondValue('')
    }
  }
  if (Co2firstvalue === '' && Co2secondvalue === '') {
    co2Name = 'Any,Any'
  } else if (Co2firstvalue === '' && Co2secondvalue) {
    co2Name = `Any,${Co2secondvalue}`
  } else if (Co2firstvalue && Co2secondvalue === '') {
    co2Name = `${Co2firstvalue},Any`
  } else {
    co2Name = `${Co2firstvalue},${Co2secondvalue}`
  }
  // console.log(Co2firstvalue)
  // console.log(Co2secondvalue)
  return (
    <>
      {status === 'success' ? (
        <List
          sx={{ width: '100%', bgcolor: 'white', marginTop: 2 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText>
              <Typography variant="h6" fontWeight={700}>
                CO2 emission
              </Typography>
            </ListItemText>
            {!open && (Co2firstvalue || Co2secondvalue !== '') ? (
              <Typography>
                {Co2firstvalue} - {Co2secondvalue} g/km
              </Typography>
            ) : (
              ''
            )}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Stack direction="row" spacing={1} m={2} alignItems="center">
              <Typography variant="span" sx={{ opacity: 0.7 }}>
                g/km
              </Typography>
              <TextField
                sx={{ width: 60 }}
                variant="outlined"
                value={Co2firstvalue}
                onChange={handleChangeFirst}
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                  maxLength: 3,
                }}
                autoComplete="off"
              />
              <Typography variant="span" sx={{ opacity: 0.7 }}>
                -
              </Typography>
              <TextField
                sx={{ width: 60 }}
                variant="outlined"
                value={Co2secondvalue}
                onChange={handleChangeSecond}
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                  maxLength: 3,
                }}
                autoComplete="off"
              />
            </Stack>
          </Collapse>
        </List>
      ) : (
        <></>
      )}
    </>
  )
}

export default CO2
