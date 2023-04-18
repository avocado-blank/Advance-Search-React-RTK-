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
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMileage } from '../features/Make&Model/api/CarMakeSlice'

const Mileage = ({
  fromValueMile,
  toValueMile,
  setFromValueMile,
  setToValueMile,
}) => {
  //Variabels
  const { status } = useSelector((store) => store.carList)
  const [open, setOpen] = useState(true)
  const dispatch = useDispatch()
  let mileName = `${fromValueMile},${toValueMile}`
  const options = [
    50,
    5000,
    10000,
    20000,
    30000,
    40000,
    50000,
    60000,
    70000,
    80000,
    90000,
    100000,
    125000,
    140000,
    175000,
    200000,
  ]
  //Hook
  useEffect(() => {
    dispatch(setMileage(mileName))
  }, [fromValueMile, toValueMile])

  //functions
  const handleClick = () => {
    setOpen(!open)
  }

  const handleFromChange = (event) => {
    const value = event.target.value
    setFromValueMile(value)
    if (value !== 'Any' && value >= toValueMile) {
      // setToValue(options[options.indexOf(value)])
      setToValueMile('Any')
    }
  }

  const handleToChange = (event) => {
    const value = event.target.value
    setToValueMile(value)
    if (value !== 'Any' && value <= fromValueMile) {
      setFromValueMile(options[options.indexOf(value)])
    } else if (value === 'Any') {
      setFromValueMile('Any')
    }
  }
  const getToOptions = () => {
    if (fromValueMile === 'Any') {
      return options
    } else {
      return options.slice(options.indexOf(fromValueMile))
    }
  }

  const getFromOptions = () => {
    if (toValueMile === 'Any') {
      return options
    } else {
      return options.slice(0, options.indexOf(toValueMile) + 1)
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
                Mileage
              </Typography>
            </ListItemText>
            {!open && fromValueMile && toValueMile !== 'Any' ? (
              <Typography>
                {fromValueMile} - {toValueMile}
              </Typography>
            ) : (
              ''
            )}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Stack direction="row" spacing={2} m={2}>
              <FormControl>
                <Select value={fromValueMile} onChange={handleFromChange}>
                  <MenuItem value="Any">Any</MenuItem>
                  {getFromOptions().map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <Select value={toValueMile} onChange={handleToChange}>
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

export default Mileage
