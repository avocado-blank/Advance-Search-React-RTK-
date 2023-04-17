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
import { setSeller } from '../api/CarMakeSlice'
import { SellerApi } from '../api/SellerApi'

const Seller = ({ sellerChecked, setSellerChecked }) => {
  //Variabels
  const { sellers, status } = useSelector((store) => store.carList)
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const sellerName = sellerChecked.join(', ')

  //Hook
  useEffect(() => {
    dispatch(setSeller(sellerName))
  }, [sellerName])
  useEffect(() => {
    dispatch(SellerApi())
  }, [])

  //functions
  const handleClick = () => {
    setOpen(!open)
  }

  const handleChangeCheck = (event) => {
    const checkedValue = event.target.value
    const isChecked = event.target.checked
    if (isChecked) {
      setSellerChecked([...sellerChecked, checkedValue])
    } else {
      setSellerChecked(sellerChecked.filter((value) => value !== checkedValue))
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
                Seller
              </Typography>
            </ListItemText>
            {!open ? <Typography>{sellerName}</Typography> : ''}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container spacing={3} m={2}>
              {sellers?.map((seller) => (
                <Grid item xs={4} key={seller.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={sellerChecked.includes(seller.name)}
                        onChange={handleChangeCheck}
                        value={seller.name}
                      />
                    }
                    label={seller.name}
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

export default Seller
