import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_API } from '../../../Globalapi'
export const TotalApi = createAsyncThunk('cars/total', async (data) => {
  console.log(data)
  // console.log(
  //   `${data.make !== null || undefined ? `make=${data.make}` : 'make='}`,
  // )
  const response = await axios.get(
    `${BASE_API}/cars?${
      data.make !== null || undefined ? `make=${data.make}` : 'make='
    }
     &${data.model !== null || undefined ? `model=${data.model}` : 'model='}&${
      data.fuel_type !== null || undefined
        ? `fuel_type=${data.fuel_type}`
        : 'fuel_type='
    }&auction_source=All Sources&${
      data.transmission !== null || undefined
        ? `transmission=${data.transmission}`
        : 'transmission='
    }&${
      data.body_type !== null || undefined
        ? `body_type=${data.body_type}`
        : 'body_type='
    }&${
      data.mileage !== null || undefined
        ? `mileage=${data.mileage}`
        : 'mileage='
    }&${data.power !== null || undefined ? `power=${data.power}` : 'power='}&${
      data.co2 !== null || undefined ? `co2=${data.co2}` : 'co2='
    }&${
      data.damage !== null || undefined ? `damage=${data.damage}` : 'damage='
    }&${
      data.colour !== null || undefined ? `colour=${data.colour}` : 'colour='
    }&${
      data.equipment !== null || undefined
        ? `equipment=${data.equipment}`
        : 'equipment='
    }&${
      data.emission_standard !== null || undefined
        ? `emission_standard=${data.emission_standard}`
        : 'emission_standard='
    }&${
      data.auction_type !== null || undefined
        ? `auction_type=${data.auction_type}`
        : 'auction_type='
    }&${
      data.country !== null || undefined
        ? `country=${data.country}`
        : 'country='
    }&${
      data.seller !== null || undefined ? `seller=${data.seller}` : 'seller='
    }&${
      data.x_time !== null || undefined ? `x_time=${data.x_time}` : 'x_time='
    }&${
      data.vat_regime !== null || undefined
        ? `vat_regime=${data.vat_regime}`
        : 'vat_regime='
    }&${data.price !== null || undefined ? `price=${data.price}` : 'price='}&${
      data.engine_size !== null || undefined
        ? `engine_size=${data.engine_size}`
        : 'engine_size='
    }
     `,
  )
  console.log(response.data)
  return response.data
})
