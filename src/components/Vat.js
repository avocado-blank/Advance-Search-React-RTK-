import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
  Checkbox,
  Collapse,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVat } from '../features/Make&Model/api/CarMakeSlice'

const Vat = ({ vatCheckedValue, setVatCheckedValue }) => {
  //Variables
  const { status } = useSelector((store) => store.carList)
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  //Hook
  useEffect(() => {
    dispatch(setVat(vatCheckedValue))
  }, [vatCheckedValue])
  //functions

  const handleChangeCheck = (event) => {
    setChecked(event.target.checked)

    if (event.target.checked === true) {
      setVatCheckedValue(event.target.value)
    } else if (event.target.checked === false) {
      setVatCheckedValue('')
    }
  }
  const handleClick = () => {
    setOpen(!open)
  }
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
                VAT regime
              </Typography>
            </ListItemText>
            {!open ? <Typography>{vatCheckedValue}</Typography> : ''}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <FormControlLabel
              sx={{ margin: 2 }}
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChangeCheck}
                  value="Show Margin Cars Only"
                />
              }
              label="Show Margin Cars Only"
            />
          </Collapse>
        </List>
      ) : (
        <></>
      )}
    </>
  )
}

export default Vat
