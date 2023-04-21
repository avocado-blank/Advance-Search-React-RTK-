import { Box, Container } from '@mui/material'
import Car from './features/Make&Model/pages/Car'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Fuel from './features/Make&Model/pages/Fuel'
import Transmission from './components/Transmission'
import Mileage from './components/Mileage'
import Registration from './components/Registration'
import Price from './components/Price'
import Equipment from './components/Equipment'
import Color from './components/Color'
import Body from './features/Make&Model/pages/Body'
import Engine from './features/Make&Model/pages/Engine'
import Seats from './components/Seats'
import Country from './components/Country'
import Seller from './features/Make&Model/pages/Seller'
import Damage from './features/Make&Model/pages/Damage'
import Emission from './components/Emission'
import Auctions from './features/Make&Model/pages/Auctions'
import Xtime from './components/Xtime'
import Vat from './components/Vat'
import Power from './features/Make&Model/pages/Power'
import CO2 from './components/CO2'
import Total from './components/Total'

function Main({
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
}) {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Navbar></Navbar>
        <>
          <Total />
          <Container>
            <Home
              setCo2FirstValue={setCo2FirstValue}
              setCo2SecondValue={setCo2SecondValue}
              setColourChecked={setColourChecked}
              setCountryChecked={setCountryChecked}
              setFuelChecked={setFuelChecked}
              setTransmissionType={setTransmissionType}
              setBodyChecked={setBodyChecked}
              setFromValueMile={setFromValueMile}
              setToValueMile={setToValueMile}
              setFromValuePower={setFromValuePower}
              setToValuePower={setToValuePower}
              setDamageChecked={setDamageChecked}
              setEquipmentChecked={setEquipmentChecked}
              setEmissionChecked={setEmissionChecked}
              setAuctionChecked={setAuctionChecked}
              setSellerChecked={setSellerChecked}
              setXtimeCheckedValue={setXtimeCheckedValue}
              setVatCheckedValue={setVatCheckedValue}
              setFromValuePrice={setFromValuePrice}
              setToValuePrice={setToValuePrice}
              setFromValueEngine={setFromValueEngine}
              setToValueEngine={setToValueEngine}
              setFromValueReg={setFromValueReg}
              setToValueReg={setToValueReg}
              setSeatChecked={setSeatChecked}
              setSelectValue={setSelectValue}
              setSelectModel={setSelectModel}
            />

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
          </Container>
        </>
      </Box>
    </>
  )
}

export default Main
