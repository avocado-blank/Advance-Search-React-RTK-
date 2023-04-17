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
import { setPrice } from '../features/Make&Model/api/CarMakeSlice'

const Price = ({
  fromValuePrice,
  toValuePrice,
  setFromValuePrice,
  setToValuePrice,
}) => {
  //Variabels
  const { status } = useSelector((store) => store.carList)
  const [open, setOpen] = useState(false)
  const options = [
    '1,000',
    '2,000',
    '3,000',
    '4,000',
    '5,000',
    '6,000',
    '7,000',
    '8,000',
    '9,000',
    '10,000',
    '11,000',
    '12,000',
    '13,000',
    '14,000',
    '15,000',
    '16,000',
    '17,000',
    '18,000',
    '19,000',
    '20,000',
    '25,000',
    '30,000',
    '35,000',
    '40,000',
    '45,000',
    '50,000',
  ]
  const priceName = `${fromValuePrice},${toValuePrice}`
  const dispatch = useDispatch()
  //Hook
  useEffect(() => {
    dispatch(setPrice(priceName))
  }, [priceName])
  //functions
  const handleClick = () => {
    setOpen(!open)
  }

  const handleFromChange = (event) => {
    const value = event.target.value
    setFromValuePrice(value)
    if (value !== 'Any' && value >= toValuePrice) {
      // setToValue(options[options.indexOf(value)])
      setToValuePrice('Any')
    }
  }

  const handleToChange = (event) => {
    const value = event.target.value
    setToValuePrice(value)
    if (value !== 'Any' && value <= fromValuePrice) {
      setFromValuePrice(options[options.indexOf(value)])
    } else if (value === 'Any') {
      setFromValuePrice('Any')
    }
  }
  const getToOptions = () => {
    if (fromValuePrice === 'Any') {
      return options
    } else {
      return options.slice(options.indexOf(fromValuePrice))
    }
  }

  const getFromOptions = () => {
    if (toValuePrice === 'Any') {
      return options
    } else {
      return options.slice(0, options.indexOf(toValuePrice) + 1)
    }
  }
  //console
  // console.log(fromValue)
  // console.log(toValue)
  return (
    <>
      {/* {status === 'success' ? ( */}
      <List
        sx={{ width: '100%', bgcolor: 'white', marginTop: 2 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText>
            <Typography variant="h6" fontWeight={700}>
              Current Price
            </Typography>
          </ListItemText>
          {!open && fromValuePrice && toValuePrice !== 'Any' ? (
            <Typography>
              {fromValuePrice} - {toValuePrice}
            </Typography>
          ) : (
            ''
          )}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Stack direction="row" spacing={2} m={2}>
            <FormControl>
              <Select value={fromValuePrice} onChange={handleFromChange}>
                <MenuItem value="Any">Any</MenuItem>
                {getFromOptions().map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Select value={toValuePrice} onChange={handleToChange}>
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
      {/* ) : ( */}
      {/* <></> */}
      {/* )} */}
    </>
  )
}

export default Price
