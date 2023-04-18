import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
  Collapse,
  FormControl,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Registration = ({
  setFromValueReg,
  setToValueReg,
  fromValueReg,
  toValueReg,
}) => {
  //Variabels
  const { status } = useSelector((store) => store.carList)
  const [open, setOpen] = useState(true)
  const options = [
    // 'ANY',
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022,
    2023,
  ]

  //functions
  const handleClick = () => {
    setOpen(!open)
  }

  const handleFromChange = (event) => {
    const value = event.target.value
    setFromValueReg(value)
    if (value !== 'Any' && value >= toValueReg) {
      // setToValue(options[options.indexOf(value)])
      setToValueReg('Any')
    }
  }

  const handleToChange = (event) => {
    const value = event.target.value
    setToValueReg(value)
    if (value !== 'Any' && value <= fromValueReg) {
      setFromValueReg(options[options.indexOf(value)])
    } else if (value === 'Any') {
      setFromValueReg('Any')
    }
  }
  const getToOptions = () => {
    if (fromValueReg === 'Any') {
      return options
    } else {
      return options.slice(options.indexOf(fromValueReg))
    }
  }

  const getFromOptions = () => {
    if (toValueReg === 'Any') {
      return options
    } else {
      return options.slice(0, options.indexOf(toValueReg) + 1)
    }
  }
  //console
  // console.log(fromValue)
  // console.log(toValue)
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
                First Registration
              </Typography>
            </ListItemText>
            {!open && fromValueReg && toValueReg !== 'Any' ? (
              <Typography>
                {fromValueReg} - {toValueReg}
              </Typography>
            ) : (
              ''
            )}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Stack direction="row" spacing={2} m={2}>
              <FormControl>
                <Select value={fromValueReg} onChange={handleFromChange}>
                  <MenuItem value="Any">Any</MenuItem>
                  {getFromOptions().map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <Select value={toValueReg} onChange={handleToChange}>
                  <MenuItem value="Any">Any</MenuItem>
                  {getToOptions().map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Collapse>
        </List>
      ) : (
        <></>
      )}
    </>
  )
}

export default Registration
