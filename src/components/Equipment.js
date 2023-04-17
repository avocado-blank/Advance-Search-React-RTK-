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
import { setEquipment } from '../features/Make&Model/api/CarMakeSlice'

const Equipment = ({ equipmentChecked, setEquipmentChecked }) => {
  //Variabels
  const { status } = useSelector((store) => store.carList)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const equipment = [
    { id: 1, name: 'Adaptive cruise control' },
    { id: 2, name: 'Air conditioning' },
    { id: 3, name: 'Air suspension' },
    { id: 4, name: 'Automatic air conditioning' },
    { id: 5, name: 'Auxiliary heating' },
    { id: 6, name: 'Blind spot warning' },
    { id: 7, name: 'Four wheel drive' },
    { id: 8, name: 'Head-up display' },
    { id: 9, name: 'Leather upholstery' },
    { id: 10, name: 'LED headlights' },
    { id: 11, name: 'Park distance control' },
    { id: 12, name: 'Rear view camera' },
    { id: 13, name: 'Navigation system' },
    { id: 14, name: 'Tow bar' },
    { id: 15, name: 'Xenon headlights' },
  ]

  const equipmentName = equipmentChecked.join(', ')
  //Hook
  useEffect(() => {
    dispatch(setEquipment(equipmentName))
  }, [equipmentName])
  //functions
  const handleClick = () => {
    setOpen(!open)
  }

  const handleChangeCheck = (event) => {
    const checkedValue = event.target.value
    const isChecked = event.target.checked
    if (isChecked) {
      setEquipmentChecked([...equipmentChecked, checkedValue])
    } else {
      setEquipmentChecked(
        equipmentChecked.filter((value) => value !== checkedValue),
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
              Equipment
            </Typography>
          </ListItemText>
          {!open ? <Typography>{equipmentName}</Typography> : ''}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Grid container spacing={3} m={2}>
            {equipment?.map((equipment) => (
              <Grid item xs={4} key={equipment.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={equipmentChecked.includes(equipment.name)}
                      onChange={handleChangeCheck}
                      value={equipment.name}
                    />
                  }
                  label={equipment.name}
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

export default Equipment
