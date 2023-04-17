import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Home = ({
  setCo2FirstValue,
  setCo2SecondValue,
  setColourChecked,
  setCountryChecked,
  setFuelChecked,
  setTransmissionType,
  setBodyChecked,
  setFromValueMile,
  setToValueMile,
  setDamageChecked,
  setEquipmentChecked,
  setEmissionChecked,
  setAuctionChecked,
  setSellerChecked,
  setXtimeCheckedValue,
  setVatCheckedValue,
  setFromValuePrice,
  setToValuePrice,
  setFromValueEngine,
  setToValueEngine,
  setFromValueReg,
  setToValueReg,
  setSeatChecked,
}) => {
  //function
  const handleReset = () => {
    setCo2FirstValue('')
    setCo2SecondValue('')
    setColourChecked([])
    setCountryChecked([])
    setFuelChecked([])
    setTransmissionType([])
    setBodyChecked([])
    setFromValueMile('Any')
    setToValueMile('Any')
    setDamageChecked([])
    setEquipmentChecked([])
    setEmissionChecked([])
    setAuctionChecked([])
    setSellerChecked([])
    setXtimeCheckedValue('')
    setVatCheckedValue('')
    setFromValuePrice('Any')
    setToValuePrice('Any')
    setFromValueEngine('Any')
    setToValueEngine('Any')
    setFromValueReg('Any')
    setToValueReg('Any')
    setSeatChecked([])
  }
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ marginTop: 5, marginBottom: 3 }}
    >
      <Typography variant="h4" fontWeight={700}>
        Advance Search
      </Typography>
      <Button
        variant="outlined"
        onClick={handleReset}
        sx={{ color: '#078C95', fontWeight: 'bold', padding: '0 60px' }}
      >
        Reset All Filter
      </Button>
    </Stack>
  )
}

export default Home
