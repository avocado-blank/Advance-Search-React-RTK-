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
import { setColour } from '../features/Make&Model/api/CarMakeSlice'

const Color = ({ colourChecked, setColourChecked }) => {
  //Variabels
  const { status } = useSelector((store) => store.carList)
  const [open, setOpen] = useState(false)
  const colors = [
    { id: 1, name: 'Beige' },
    { id: 2, name: 'Black' },
    { id: 3, name: 'Blue' },
    { id: 4, name: 'Brown' },
    { id: 5, name: 'Burgundy' },
    { id: 6, name: 'Grey' },
    { id: 7, name: 'Green' },
    { id: 8, name: 'Orange' },
    { id: 9, name: 'Purple' },
    { id: 10, name: 'Red' },
    { id: 11, name: 'White' },
    { id: 12, name: 'Yellow' },
  ]

  const colorName = colourChecked.join(', ')
  const dispatch = useDispatch()
  //Hook
  useEffect(() => {
    dispatch(setColour(colorName))
  }, [colourChecked])
  //functions
  const handleClick = () => {
    setOpen(!open)
  }

  const handleChangeCheck = (event) => {
    const checkedValue = event.target.value
    const isChecked = event.target.checked
    if (isChecked) {
      setColourChecked([...colourChecked, checkedValue])
    } else {
      setColourChecked(colourChecked.filter((value) => value !== checkedValue))
    }
  }

  //console
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
                Colour
              </Typography>
            </ListItemText>
            {!open ? <Typography>{colorName}</Typography> : ''}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container spacing={3} m={2}>
              {colors?.map((color) => (
                <Grid item xs={4} key={color.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={colourChecked.includes(color.name)}
                        onChange={handleChangeCheck}
                        value={color.name}
                      />
                    }
                    label={color.name}
                  />
                </Grid>
              ))}
            </Grid>
          </Collapse>
        </List>
      ) : (
        <></>
      )}
    </>
  )
}

export default Color
