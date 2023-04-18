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
import { BodyApi } from '../api/BodyApi'
import { setBodyType } from '../api/CarMakeSlice'

const Body = ({ bodyChecked, setBodyChecked }) => {
  //Variables
  const { bodys, status } = useSelector((store) => store.carList)
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const bodyName = bodyChecked.join(', ')
  //Hook
  useEffect(() => {
    dispatch(BodyApi())
  }, [])

  useEffect(() => {
    dispatch(setBodyType(bodyName))
  }, [bodyChecked])

  //functions

  const handleClick = () => {
    setOpen(!open)
  }

  const handleChangeCheck = (event) => {
    const checkedValue = event.target.value
    const isChecked = event.target.checked
    if (isChecked) {
      setBodyChecked([...bodyChecked, checkedValue])
    } else {
      setBodyChecked(bodyChecked.filter((value) => value !== checkedValue))
    }
  }

  //log
  console.log(bodys)
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
                Body Type
              </Typography>
            </ListItemText>
            {!open ? <Typography>{bodyName}</Typography> : ''}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container spacing={3} m={2}>
              {bodys?.map((body) => (
                <Grid item xs={4} key={body}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={bodyChecked.includes(body)}
                        onChange={handleChangeCheck}
                        value={body}
                      />
                    }
                    label={body}
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

export default Body
