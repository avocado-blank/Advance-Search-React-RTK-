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
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Seats = ({ seatChecked, setSeatChecked }) => {
  //Variabels
  const { status } = useSelector((store) => store.carList)
  const [open, setOpen] = useState(false)

  const seats = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
    { id: 6, name: '6' },
    { id: 7, name: '7' },
    { id: 8, name: '8' },
    { id: 9, name: '9' },
    { id: 10, name: '10' },
    { id: 11, name: '>10' },
  ]

  const seatName = seatChecked.join(', ')

  //functions
  const handleClick = () => {
    setOpen(!open)
  }

  const handleChangeCheck = (event) => {
    const checkedValue = event.target.value
    const isChecked = event.target.checked
    if (isChecked) {
      setSeatChecked([...seatChecked, checkedValue])
    } else {
      setSeatChecked(seatChecked.filter((value) => value !== checkedValue))
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
              Number of seats
            </Typography>
          </ListItemText>
          {!open ? <Typography>{seatName}</Typography> : ''}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Grid container spacing={3} m={2}>
            {seats?.map((seat) => (
              <Grid item xs={4} key={seat.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={seatChecked.includes(seat.name)}
                      onChange={handleChangeCheck}
                      value={seat.name}
                    />
                  }
                  label={seat.name}
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

export default Seats
