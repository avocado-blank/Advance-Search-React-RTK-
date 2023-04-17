import { createSlice } from '@reduxjs/toolkit'
import { AuctionApi } from './AuctionApi'
import { BodyApi } from './BodyApi'
import { CarMakeApi } from './CarMakeApi'
import { DamageApi } from './DamageApi'
import { DetailCarApi } from './DetailCarApi'
import { EngineApi } from './EngineApi'
import { FuelApi } from './FuelApi'
import { SellerApi } from './SellerApi'
import { PowerApi } from './PowerApi'

const initialState = {
  cars: [],
  detail: [],
  fuel: [],
  bodys: [],
  engines: [],
  sellers: [],
  damages: [],
  auctions: [],
  power: [],
  data: {
    make: '',
    model: '',
    fuel_type: '', //done
    transmiion: '', //done
    body_type: '', //done
    mileage: '', //done
    power: '', //done
    co2: '', //done
    damage: '', //done
    colour: '', //done
    equipment: '', //done
    emission_standard: '', //done
    auction_type: '', //done
    country: '', //done
    seller: '', //done
    x_time: '', //done
    vat_regime: '', //done
    price: '', //done
    engine_size: '', //done
  },
  status: null,
}
const CarMakeReducer = createSlice({
  name: 'carsMake',
  initialState,
  reducers: {
    setMake: (state, { payload }) => {
      state.data.make = payload
    },
    setModel: (state, { payload }) => {
      state.data.model = payload
    },
    setFuelType: (state, { payload }) => {
      state.data.fuel_type = payload
    },
    setTransmission: (state, { payload }) => {
      state.data.transmiion = payload
    },
    setBodyType: (state, { payload }) => {
      state.data.body_type = payload
    },
    setMileage: (state, { payload }) => {
      state.data.mileage = payload
    },
    setPower: (state, { payload }) => {
      state.data.power = payload
    },
    setCo2: (state, { payload }) => {
      state.data.co2 = payload
    },
    setDamage: (state, { payload }) => {
      state.data.damage = payload
    },
    setColour: (state, { payload }) => {
      state.data.colour = payload
    },
    setEquipment: (state, { payload }) => {
      state.data.equipment = payload
    },
    setEmission: (state, { payload }) => {
      state.data.emission_standard = payload
    },
    setAution: (state, { payload }) => {
      state.data.auction_type = payload
    },
    setCountry: (state, { payload }) => {
      state.data.country = payload
    },
    setSeller: (state, { payload }) => {
      state.data.seller = payload
    },
    setXtime: (state, { payload }) => {
      state.data.x_time = payload
    },
    setVat: (state, { payload }) => {
      state.data.vat_regime = payload
    },
    setPrice: (state, { payload }) => {
      state.data.price = payload
    },
    setEngineSize: (state, { payload }) => {
      state.data.engine_size = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CarMakeApi.pending, (state, { payload }) => {
      state.status = 'pending'
    })
    builder.addCase(CarMakeApi.fulfilled, (state, { payload }) => {
      state.cars = payload.data
      state.status = 'success'
      console.log(payload)
    })
    builder.addCase(DetailCarApi.fulfilled, (state, { payload }) => {
      state.detail = payload.data
      console.log(payload)
    })
    builder.addCase(FuelApi.fulfilled, (state, { payload }) => {
      state.fuel = payload.data
      console.log(payload)
    })
    builder.addCase(BodyApi.fulfilled, (state, { payload }) => {
      state.bodys = payload
      console.log(payload)
    })
    builder.addCase(EngineApi.fulfilled, (state, { payload }) => {
      state.engines = payload.data
      console.log(payload)
    })
    builder.addCase(SellerApi.fulfilled, (state, { payload }) => {
      state.sellers = payload.data
      console.log(payload)
    })
    builder.addCase(DamageApi.fulfilled, (state, { payload }) => {
      state.damages = payload.data
      console.log(payload)
    })
    builder.addCase(AuctionApi.fulfilled, (state, { payload }) => {
      state.auctions = payload.data
      console.log(payload)
    })
    builder.addCase(PowerApi.fulfilled, (state, { payload }) => {
      state.power = payload.data.value
      // console.log(payload)
    })
  },
})

export default CarMakeReducer.reducer
export const {
  setCo2,
  setColour,
  setCountry,
  setFuelType,
  setTransmission,
  setBodyType,
  setMileage,
  setPower,
  setDamage,
  setEquipment,
  setEmission,
  setAution,
  setSeller,
  setXtime,
  setVat,
  setPrice,
  setEngineSize,
} = CarMakeReducer.actions