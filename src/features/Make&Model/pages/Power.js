import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
  Collapse,
  FormControl,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPower } from '../api/CarMakeSlice'
import { PowerApi } from '../api/PowerApi'

const Power = ({
  fromValuePower,
  toValuePower,
  setFromValuePower,
  setToValuePower,
}) => {
  //Variables
  const [open, setOpen] = useState(false)
  const { power, status } = useSelector((store) => store.carList)
  const [selectedValue, setSelectedValue] = useState('hp')
  let options
  const dispatch = useDispatch()

  let powerName = `${fromValuePower},${toValuePower}`

  //Hook
  useEffect(() => {
    dispatch(setPower(powerName))
  }, [fromValuePower, toValuePower])

  useEffect(() => {
    if (selectedValue === 'hp') {
      dispatch(PowerApi(1))
      setFromValuePower('Any')
      setToValuePower('Any')
    } else if (selectedValue === 'kw') {
      dispatch(PowerApi(2))
      setFromValuePower('Any')
      setToValuePower('Any')
    }
  }, [selectedValue])
  console.log(power)
  options = power

  //function
  const handleClick = () => {
    setOpen(!open)
  }

  const handleFromChange = (event) => {
    const value = event.target.value
    setFromValuePower(value)
    if (value !== 'Any' && value >= toValuePower) {
      // setToValue(options[options.indexOf(value)])
      setToValuePower('Any')
    }
  }

  const handleToChange = (event) => {
    const value = event.target.value
    setToValuePower(value)
    if (value !== 'Any' && value <= fromValuePower) {
      setFromValuePower(options[options.indexOf(value)])
    } else if (value === 'Any') {
      setFromValuePower('Any')
    }
  }
  const getToOptions = () => {
    if (fromValuePower === 'Any') {
      return options
    } else {
      return options.slice(options.indexOf(fromValuePower))
    }
  }

  const getFromOptions = () => {
    if (toValuePower === 'Any') {
      return options
    } else {
      return options.slice(0, options.indexOf(toValuePower) + 1)
    }
  }

  //log
  // console.log(power)

  // console.log(selectedValue)
  // console.log(options)
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
                Power
              </Typography>
            </ListItemText>
            {!open && fromValuePower && toValuePower !== 'Any' ? (
              <Typography>
                {fromValuePower} - {toValuePower}
              </Typography>
            ) : (
              ''
            )}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={selectedValue}
                name="radio-buttons-group"
                onChange={(e) => setSelectedValue(e.target.value)}
              >
                <Stack direction="row" spacing={2} m={2}>
                  <FormControlLabel value="hp" control={<Radio />} label="hp" />
                  <FormControlLabel value="kw" control={<Radio />} label="kw" />
                </Stack>
              </RadioGroup>
            </FormControl>
            <Stack direction="row" spacing={2} m={2}>
              <FormControl>
                <Select value={fromValuePower} onChange={handleFromChange}>
                  <MenuItem value="Any">Any</MenuItem>
                  {getFromOptions().map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <Select value={toValuePower} onChange={handleToChange}>
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

export default Power
