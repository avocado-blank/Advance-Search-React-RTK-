import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Main from './Main'
import CarDetail from './components/CarDetail'
const PrivateRoutes = () => {
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
    <Routes>
      <Route path="/">
        <Route
          path="page"
          element={
            <Main
              selectValue={selectValue}
              selectModel={selectModel}
              setSelectValue={setSelectValue}
              setSelectModel={setSelectModel}
              fuelChecked={fuelChecked}
              setFuelChecked={setFuelChecked}
              tranmissionType={tranmissionType}
              setTransmissionType={setTransmissionType}
              fromValueMile={fromValueMile}
              toValueMile={toValueMile}
              setFromValueMile={setFromValueMile}
              setToValueMile={setToValueMile}
              fromValueReg={fromValueReg}
              toValueReg={toValueReg}
              setFromValueReg={setFromValueReg}
              setToValueReg={setToValueReg}
              fromValueEngine={fromValueEngine}
              toValueEngine={toValueEngine}
              setFromValueEngine={setFromValueEngine}
              setToValueEngine={setToValueEngine}
              fromValuePower={fromValuePower}
              toValuePower={toValuePower}
              setFromValuePower={setFromValuePower}
              setToValuePower={setToValuePower}
              bodyChecked={bodyChecked}
              setBodyChecked={setBodyChecked}
              fromValuePrice={fromValuePrice}
              toValuePrice={toValuePrice}
              setFromValuePrice={setFromValuePrice}
              setToValuePrice={setToValuePrice}
              equipmentChecked={equipmentChecked}
              setEquipmentChecked={setEquipmentChecked}
              colourChecked={colourChecked}
              setColourChecked={setColourChecked}
              seatChecked={seatChecked}
              setSeatChecked={setSeatChecked}
              countryChecked={countryChecked}
              setCountryChecked={setCountryChecked}
              sellerChecked={sellerChecked}
              setSellerChecked={setSellerChecked}
              damageChecked={damageChecked}
              setDamageChecked={setDamageChecked}
              emissionChecked={emissionChecked}
              setEmissionChecked={setEmissionChecked}
              Co2firstvalue={Co2firstvalue}
              Co2secondvalue={Co2secondvalue}
              setCo2FirstValue={setCo2FirstValue}
              setCo2SecondValue={setCo2SecondValue}
              xtimeCheckedValue={xtimeCheckedValue}
              setXtimeCheckedValue={setXtimeCheckedValue}
              auctionChecked={auctionChecked}
              setAuctionChecked={setAuctionChecked}
              vatCheckedValue={vatCheckedValue}
              setVatCheckedValue={setVatCheckedValue}
            />
          }
        />
        <Route
          path="detail"
          element={
            <CarDetail
              selectValue={selectValue}
              selectModel={selectModel}
              setSelectValue={setSelectValue}
              setSelectModel={setSelectModel}
              fuelChecked={fuelChecked}
              setFuelChecked={setFuelChecked}
              tranmissionType={tranmissionType}
              setTransmissionType={setTransmissionType}
              fromValueMile={fromValueMile}
              toValueMile={toValueMile}
              setFromValueMile={setFromValueMile}
              setToValueMile={setToValueMile}
              fromValueReg={fromValueReg}
              toValueReg={toValueReg}
              setFromValueReg={setFromValueReg}
              setToValueReg={setToValueReg}
              fromValueEngine={fromValueEngine}
              toValueEngine={toValueEngine}
              setFromValueEngine={setFromValueEngine}
              setToValueEngine={setToValueEngine}
              fromValuePower={fromValuePower}
              toValuePower={toValuePower}
              setFromValuePower={setFromValuePower}
              setToValuePower={setToValuePower}
              bodyChecked={bodyChecked}
              setBodyChecked={setBodyChecked}
              fromValuePrice={fromValuePrice}
              toValuePrice={toValuePrice}
              setFromValuePrice={setFromValuePrice}
              setToValuePrice={setToValuePrice}
              equipmentChecked={equipmentChecked}
              setEquipmentChecked={setEquipmentChecked}
              colourChecked={colourChecked}
              setColourChecked={setColourChecked}
              seatChecked={seatChecked}
              setSeatChecked={setSeatChecked}
              countryChecked={countryChecked}
              setCountryChecked={setCountryChecked}
              sellerChecked={sellerChecked}
              setSellerChecked={setSellerChecked}
              damageChecked={damageChecked}
              setDamageChecked={setDamageChecked}
              emissionChecked={emissionChecked}
              setEmissionChecked={setEmissionChecked}
              Co2firstvalue={Co2firstvalue}
              Co2secondvalue={Co2secondvalue}
              setCo2FirstValue={setCo2FirstValue}
              setCo2SecondValue={setCo2SecondValue}
              xtimeCheckedValue={xtimeCheckedValue}
              setXtimeCheckedValue={setXtimeCheckedValue}
              auctionChecked={auctionChecked}
              setAuctionChecked={setAuctionChecked}
              vatCheckedValue={vatCheckedValue}
              setVatCheckedValue={setVatCheckedValue}
            />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/page" />} />
    </Routes>
  )
}

export default PrivateRoutes
