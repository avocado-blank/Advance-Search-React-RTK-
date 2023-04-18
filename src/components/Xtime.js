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
import { setXtime } from '../features/Make&Model/api/CarMakeSlice'

const Xtime = ({ xtimeCheckedValue, setXtimeCheckedValue }) => {
  //Variables
  const { status } = useSelector((store) => store.carList)
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  //Hook
  useEffect(() => {
    dispatch(setXtime(xtimeCheckedValue))
  }, [xtimeCheckedValue])
  //functions

  const handleChangeCheck = (event) => {
    setChecked(event.target.checked)

    if (event.target.checked === true) {
      setXtimeCheckedValue(event.target.value)
    } else if (event.target.checked === false) {
      setXtimeCheckedValue('')
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
                x-Time
              </Typography>
            </ListItemText>
            {!open ? <Typography>{xtimeCheckedValue}</Typography> : ''}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <FormControlLabel
              sx={{ margin: 2 }}
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChangeCheck}
                  value="Show x-Time only"
                />
              }
              label="Show x-Time only"
            />
          </Collapse>
        </List>
      ) : (
        <></>
      )}
    </>
  )
}

export default Xtime
