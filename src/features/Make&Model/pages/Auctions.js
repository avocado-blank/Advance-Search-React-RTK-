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
import { AuctionApi } from '../api/AuctionApi'
import { setAution } from '../api/CarMakeSlice'

const Auction = ({ auctionChecked, setAuctionChecked }) => {
  //Variabels
  const { auctions, status } = useSelector((store) => store.carList)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const auctionName = auctionChecked.join(', ')

  //Hook
  useEffect(() => {
    dispatch(setAution(auctionName))
  }, [auctionChecked])
  useEffect(() => {
    if (localStorage.getItem('data')) {
      const local = JSON.parse(localStorage.getItem('data'))
      let token = local?.data.auth_token
      let id = local?.data.id
      let data = {
        token,
        id,
      }
    dispatch(AuctionApi(data))}
  }, [])

  //functions
  const handleClick = () => {
    setOpen(!open)
  }

  const handleChangeCheck = (event) => {
    const checkedValue = event.target.value
    const isChecked = event.target.checked
    if (isChecked) {
      setAuctionChecked([...auctionChecked, checkedValue])
    } else {
      setAuctionChecked(
        auctionChecked.filter((value) => value !== checkedValue),
      )
    }
  }

  //console
  console.log(auctions)
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
                Auction Type
              </Typography>
            </ListItemText>
            {!open ? <Typography>{auctionName}</Typography> : ''}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container spacing={3} m={2}>
              {auctions?.map((auction) => (
                <Grid item xs={4} key={auction.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={auctionChecked.includes(auction.name)}
                        onChange={handleChangeCheck}
                        value={auction.name}
                      />
                    }
                    label={auction.name}
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

export default Auction
