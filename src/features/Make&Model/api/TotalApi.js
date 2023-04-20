import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API } from '../../../Globalapi'
export const TotalApi = createAsyncThunk('cars/total', async (authdata) => {
  // console.log(
  //   `${data.make !== null || undefined ? `make=${data.make}` : 'make='}`,
  // )
  const response = await axios.get(
    `${BASE_API}/user/cars?${
      authdata.data.make !== null || undefined
        ? `make=${authdata.data.make}`
        : 'make='
    }
     &${
       authdata.data.model !== null || undefined
         ? `model=${authdata.data.model}`
         : 'model='
     }&${
      authdata.data.fuel_type !== null || undefined
        ? `fuel_type=${authdata.data.fuel_type}`
        : 'fuel_type='
    }&auction_source=All Sources&${
      authdata.data.transmission !== null || undefined
        ? `transmission=${authdata.data.transmission}`
        : 'transmission='
    }&${
      authdata.data.body_type !== null || undefined
        ? `body_type=${authdata.data.body_type}`
        : 'body_type='
    }&${
      authdata.data.mileage !== null || undefined
        ? `mileage=${authdata.data.mileage}`
        : 'mileage='
    }&${
      authdata.data.power !== null || undefined
        ? `power=${authdata.data.power}`
        : 'power='
    }&${
      authdata.data.co2 !== null || undefined
        ? `co2=${authdata.data.co2}`
        : 'co2='
    }&${
      authdata.data.damage !== null || undefined
        ? `damage=${authdata.data.damage}`
        : 'damage='
    }&${
      authdata.data.colour !== null || undefined
        ? `colour=${authdata.data.colour}`
        : 'colour='
    }&${
      authdata.data.equipment !== null || undefined
        ? `equipment=${authdata.data.equipment}`
        : 'equipment='
    }&${
      authdata.data.emission_standard !== null || undefined
        ? `emission_standard=${authdata.data.emission_standard}`
        : 'emission_standard='
    }&${
      authdata.data.auction_type !== null || undefined
        ? `auction_type=${authdata.data.auction_type}`
        : 'auction_type='
    }&${
      authdata.data.country !== null || undefined
        ? `country=${authdata.data.country}`
        : 'country='
    }&${
      authdata.data.seller !== null || undefined
        ? `seller=${authdata.data.seller}`
        : 'seller='
    }&${
      authdata.data.x_time !== null || undefined
        ? `x_time=${authdata.data.x_time}`
        : 'x_time='
    }&${
      authdata.data.vat_regime !== null || undefined
        ? `vat_regime=${authdata.data.vat_regime}`
        : 'vat_regime='
    }&${
      authdata.data.price !== null || undefined
        ? `price=${authdata.data.price}`
        : 'price='
    }&${
      authdata.data.engine_size !== null || undefined
        ? `engine_size=${authdata.data.engine_size}`
        : 'engine_size='
    }&user_id=${authdata.id}
     `,
    {
      headers: {
        Authorization: `Bearer ${authdata.token}`,
      },
    },
  )
  console.log(response.data)
  return response.data
})
