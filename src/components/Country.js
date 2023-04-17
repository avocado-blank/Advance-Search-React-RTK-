import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
  Checkbox,
  Collapse,
  FormControlLabel,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCountry } from '../features/Make&Model/api/CarMakeSlice'

const Country = ({ countryChecked, setCountryChecked }) => {
  //Variabels
  const { status } = useSelector((store) => store.carList)
  const [open, setOpen] = useState(false)

  const countries = [
    { id: 1, name: 'Austria' },
    { id: 2, name: 'Belgium' },
    { id: 3, name: 'Bulgaria' },
    { id: 4, name: 'Czech republic' },
    { id: 5, name: 'Germany' },
    { id: 6, name: 'Estonia' },
    { id: 7, name: 'Spain' },
    { id: 8, name: 'Finland' },
    { id: 9, name: 'France' },
    { id: 10, name: 'Croatia' },
    { id: 11, name: 'Hungary' },
    { id: 12, name: 'Italy' },
    { id: 13, name: 'Lithuania' },
    { id: 14, name: 'Luxembourg' },
    { id: 15, name: 'Latvia' },
    { id: 16, name: 'Netherlands' },
    { id: 17, name: 'Poland' },
    { id: 18, name: 'Portugal' },
    { id: 19, name: 'Romania' },
    { id: 20, name: 'Sewden' },
    { id: 21, name: 'Slovenia' },
    { id: 22, name: 'Slovakia' },
    { id: 23, name: 'United Kingdom' },
  ]

  const countryName = countryChecked.join(', ')
  const dispatch = useDispatch()
  //Hook
  useEffect(() => {
    dispatch(setCountry(countryName))
  }, [countryName])
  //functions
  const handleClick = () => {
    setOpen(!open)
  }

  const handleChangeCheck = (event) => {
    const checkedValue = event.target.value
    const isChecked = event.target.checked
    if (isChecked) {
      setCountryChecked([...countryChecked, checkedValue])
    } else {
      setCountryChecked(
        countryChecked.filter((value) => value !== checkedValue),
      )
    }
  }

  //console
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
              Origin country
            </Typography>
          </ListItemText>
          {!open ? <Typography>{countryName}</Typography> : ''}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Grid container spacing={3} m={2}>
            {countries?.map((country) => (
              <Grid item xs={4} key={country.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={countryChecked.includes(country.name)}
                      onChange={handleChangeCheck}
                      value={country.name}
                    />
                  }
                  label={country.name}
                />
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </List>
      {/* ) : ( */}
      {/* <></> */}
      {/* )} */}
    </>
  )
}

export default Country
