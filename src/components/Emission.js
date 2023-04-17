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
import { setEmission } from '../features/Make&Model/api/CarMakeSlice'

const Emission = ({ emissionChecked, setEmissionChecked }) => {
  //Variabels
  const { status } = useSelector((store) => store.carList)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const emissions = [
    { id: 1, name: 'EU1' },
    { id: 2, name: 'EU2' },
    { id: 3, name: 'EU3' },
    { id: 4, name: 'EU4' },
    { id: 5, name: 'EU5' },
    { id: 6, name: 'EU6' },
  ]

  const emissionName = emissionChecked.join(', ')
  //Hook
  useEffect(() => {
    dispatch(setEmission(emissionName))
  }, [emissionName])
  //functions
  const handleClick = () => {
    setOpen(!open)
  }

  const handleChangeCheck = (event) => {
    const checkedValue = event.target.value
    const isChecked = event.target.checked
    if (isChecked) {
      setEmissionChecked([...emissionChecked, checkedValue])
    } else {
      setEmissionChecked(
        emissionChecked.filter((value) => value !== checkedValue),
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
              Emission Standard
            </Typography>
          </ListItemText>
          {!open ? <Typography>{emissionName}</Typography> : ''}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Grid container spacing={3} m={2}>
            {emissions?.map((emission) => (
              <Grid item xs={4} key={emission.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={emissionChecked.includes(emission.name)}
                      onChange={handleChangeCheck}
                      value={emission.name}
                    />
                  }
                  label={emission.name}
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

export default Emission
