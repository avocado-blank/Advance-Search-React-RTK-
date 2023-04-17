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
import { setTransmission } from '../features/Make&Model/api/CarMakeSlice'

const Transmission = ({ tranmissionType, setTransmissionType }) => {
  //Variables
  const { status } = useSelector((store) => store.carList)
  const [open, setOpen] = useState(true)
  const dispatch = useDispatch()

  const transmissionName = tranmissionType.join(', ')
  //Hook
  useEffect(() => {
    dispatch(setTransmission(transmissionName))
  }, [transmissionName])
  //functions
  const handleClick = () => {
    setOpen(!open)
  }
  const handleChangeCheck = (e) => {
    if (e.target.checked) {
      setTransmissionType([...tranmissionType, e.target.value])
    } else {
      setTransmissionType(
        tranmissionType.filter((value) => value !== e.target.value),
      )
    }
  }
  //log
  console.log(tranmissionType)
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
              Transmission
            </Typography>
          </ListItemText>
          {!open ? <Typography>{transmissionName}</Typography> : ''}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Grid container spacing={3} m={2}>
            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={tranmissionType.includes('Automatic')}
                    onChange={handleChangeCheck}
                    value="Automatic"
                  />
                }
                label="Automatic"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={tranmissionType.includes('Manual')}
                    onChange={handleChangeCheck}
                    value="Manual"
                  />
                }
                label="Manual"
              />
            </Grid>
          </Grid>
        </Collapse>
      </List>
      {/* ) : ( */}
      {/* <></> */}
      {/* )} */}
    </>
  )
}

export default Transmission
