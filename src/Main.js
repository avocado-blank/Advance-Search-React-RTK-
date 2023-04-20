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
import { useState } from 'react'
import Total from './components/Total'

function Main() {
  //State()
  //make & model
  const [selectValue, setSelectValue] = useState(null)
  const [selectModel, setSelectModel] = useState([])
  //Co2
  const [Co2firstvalue, setCo2FirstValue] = useState('')
  const [Co2secondvalue, setCo2SecondValue] = useState('')
  //Colour
  const [colourChecked, setColourChecked] = useState([])
  //Counrty
  const [countryChecked, setCountryChecked] = useState([])
  //Make & Model
  //Fuel
  const [fuelChecked, setFuelChecked] = useState([])
  //Transmission
  const [tranmissionType, setTransmissionType] = useState([])
  //Body
  const [bodyChecked, setBodyChecked] = useState([])
  //Mile
  const [fromValueMile, setFromValueMile] = useState('Any')
  const [toValueMile, setToValueMile] = useState('Any')
  //Power
  const [fromValuePower, setFromValuePower] = useState('Any')
  const [toValuePower, setToValuePower] = useState('Any')
  //Damage
  const [damageChecked, setDamageChecked] = useState([])
  //Equipment
  const [equipmentChecked, setEquipmentChecked] = useState([])
  //Emission
  const [emissionChecked, setEmissionChecked] = useState([])
  //Auction
  const [auctionChecked, setAuctionChecked] = useState([])
  //Seller
  const [sellerChecked, setSellerChecked] = useState([])
  //Xtime
  const [xtimeCheckedValue, setXtimeCheckedValue] = useState('')
  //Vat
  const [vatCheckedValue, setVatCheckedValue] = useState('')
  //Price
  const [fromValuePrice, setFromValuePrice] = useState('Any')
  const [toValuePrice, setToValuePrice] = useState('Any')
  //Engine
  const [fromValueEngine, setFromValueEngine] = useState('Any')
  const [toValueEngine, setToValueEngine] = useState('Any')
  //Reg
  const [fromValueReg, setFromValueReg] = useState('Any')
  const [toValueReg, setToValueReg] = useState('Any')
  //Seat
  const [seatChecked, setSeatChecked] = useState([])
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
