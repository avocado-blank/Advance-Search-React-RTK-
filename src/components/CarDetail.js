import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import Car from '../features/Make&Model/pages/Car'
import Fuel from '../features/Make&Model/pages/Fuel'
import Transmission from './Transmission'
import Mileage from './Mileage'
import Registration from './Registration'
import Engine from '../features/Make&Model/pages/Engine'
import Power from '../features/Make&Model/pages/Power'
import Body from '../features/Make&Model/pages/Body'
import Price from './Price'
import Equipment from './Equipment'
import Color from './Color'
import Seats from './Seats'
import Country from './Country'
import Seller from '../features/Make&Model/pages/Seller'
import Damage from '../features/Make&Model/pages/Damage'
import Emission from './Emission'
import CO2 from './CO2'
import Xtime from './Xtime'
import Vat from './Vat'
import Auctions from '../features/Make&Model/pages/Auctions'
import { TotalApi } from '../features/Make&Model/api/TotalApi'
const CarDetail = ({
  selectValue,
  selectModel,
  setSelectValue,
  setSelectModel,
  fuelChecked,
  setFuelChecked,
  tranmissionType,
  setTransmissionType,
  fromValueMile,
  toValueMile,
  setFromValueMile,
  setToValueMile,
  fromValueReg,
  toValueReg,
  setFromValueReg,
  setToValueReg,
  fromValueEngine,
  toValueEngine,
  setFromValueEngine,
  setToValueEngine,
  fromValuePower,
  toValuePower,
  setFromValuePower,
  setToValuePower,
  bodyChecked,
  setBodyChecked,
  fromValuePrice,
  toValuePrice,
  setFromValuePrice,
  setToValuePrice,
  equipmentChecked,
  setEquipmentChecked,
  colourChecked,
  setColourChecked,
  seatChecked,
  setSeatChecked,
  countryChecked,
  setCountryChecked,
  sellerChecked,
  setSellerChecked,
  damageChecked,
  setDamageChecked,
  emissionChecked,
  setEmissionChecked,
  Co2firstvalue,
  Co2secondvalue,
  setCo2FirstValue,
  setCo2SecondValue,
  xtimeCheckedValue,
  setXtimeCheckedValue,
  auctionChecked,
  setAuctionChecked,
  vatCheckedValue,
  setVatCheckedValue,
}) => {
  const { total, data, status, totalStatus } = useSelector(
    (store) => store.carList,
  )
  const dispatch = useDispatch()
  console.log(selectValue)
  useEffect(() => {
    if (localStorage.getItem('data')) {
      const local = JSON.parse(localStorage.getItem('data'))
      let token = local?.data.auth_token
      let id = local?.data.id
      let authdata = {
        token,
        id,
        data,
      }
      dispatch(TotalApi(authdata))
    }
  }, [data])
  return (
    <>
      <Navbar />
      {/* {status === 'success' ? ( */}
      <Box sx={{ width: '100%', margin: '10px auto' }}>
        <Grid container spacing={3} sx={{ margin: '0 auto' }}>
          <Grid item sx={{ width: '500px' }}>
            <Car
              selectValue={selectValue}
              selectModel={selectModel}
              setSelectValue={setSelectValue}
              setSelectModel={setSelectModel}
            />
            <Fuel fuelChecked={fuelChecked} setFuelChecked={setFuelChecked} />
            <Transmission
              tranmissionType={tranmissionType}
              setTransmissionType={setTransmissionType}
            />
            <Mileage
              fromValueMile={fromValueMile}
              toValueMile={toValueMile}
              setFromValueMile={setFromValueMile}
              setToValueMile={setToValueMile}
            />
            <Registration
              fromValueReg={fromValueReg}
              toValueReg={toValueReg}
              setFromValueReg={setFromValueReg}
              setToValueReg={setToValueReg}
            />
            <Engine
              fromValueEngine={fromValueEngine}
              toValueEngine={toValueEngine}
              setFromValueEngine={setFromValueEngine}
              setToValueEngine={setToValueEngine}
            />
            <Power
              fromValuePower={fromValuePower}
              toValuePower={toValuePower}
              setFromValuePower={setFromValuePower}
              setToValuePower={setToValuePower}
            />
            <Body bodyChecked={bodyChecked} setBodyChecked={setBodyChecked} />
            <Price
              fromValuePrice={fromValuePrice}
              toValuePrice={toValuePrice}
              setFromValuePrice={setFromValuePrice}
              setToValuePrice={setToValuePrice}
            />
            <Equipment
              equipmentChecked={equipmentChecked}
              setEquipmentChecked={setEquipmentChecked}
            />
            <Color
              colourChecked={colourChecked}
              setColourChecked={setColourChecked}
            />
            <Seats seatChecked={seatChecked} setSeatChecked={setSeatChecked} />
            <Country
              countryChecked={countryChecked}
              setCountryChecked={setCountryChecked}
            />
            <Seller
              sellerChecked={sellerChecked}
              setSellerChecked={setSellerChecked}
            />
            <Damage
              damageChecked={damageChecked}
              setDamageChecked={setDamageChecked}
            />
            <Emission
              emissionChecked={emissionChecked}
              setEmissionChecked={setEmissionChecked}
            />
            <CO2
              Co2firstvalue={Co2firstvalue}
              Co2secondvalue={Co2secondvalue}
              setCo2FirstValue={setCo2FirstValue}
              setCo2SecondValue={setCo2SecondValue}
            />
            <Xtime
              xtimeCheckedValue={xtimeCheckedValue}
              setXtimeCheckedValue={setXtimeCheckedValue}
            />
            <Auctions
              auctionChecked={auctionChecked}
              setAuctionChecked={setAuctionChecked}
            />
            <Vat
              vatCheckedValue={vatCheckedValue}
              setVatCheckedValue={setVatCheckedValue}
            />
          </Grid>
          {totalStatus === 'pending' ? (
            <>Loading</>
          ) : (
            <Grid item>
              <Box sx={{ width: '900px', margin: '10px auto' }}>
                <Paper
                  sx={{
                    height: '30px',
                    padding: '10px 10px',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: '#A8C000',
                    position: 'sticky',
                    top: '5px',
                    zIndex: 1,
                  }}
                >
                  {`${total?.total} results`}
                </Paper>
                {total.data?.map((total) => (
                  <Paper
                    sx={{ margin: '30px 0', padding: '5px' }}
                    key={total.id}
                  >
                    <Typography
                      sx={{ fontSize: '20px' }}
                    >{`${total.name}-${total.fuel_type}-${total.transmission}`}</Typography>
                    <Typography
                      sx={{ opacity: 0.8 }}
                    >{`${total.auction_type}`}</Typography>
                    <Grid container spacing={1}>
                      <Grid item>
                        <img
                          src={total.image_path}
                          width="250px"
                          height="250px"
                          alt="car"
                        />
                      </Grid>
                      <Grid item>
                        <Stack margin="0 5px">
                          <Box>
                            <strong>Estimated Price</strong>
                            <Typography fontSize={20}>
                              <strong>{total.price}</strong>
                            </Typography>
                          </Box>
                          <Stack direction="row" spacing={3} marginTop={3}>
                            <Typography>{`${total.g_km} g/km (${total.emission_standard})`}</Typography>
                            <Typography>{`${total.power_kw} (${total.power_hp})`}</Typography>
                            <Typography>{total.origin_country}</Typography>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Paper>
                ))}
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
      {/* ) : ( */}
      {/* <>Loading</> */}
      {/* )} */}
    </>
  )
}

export default CarDetail
