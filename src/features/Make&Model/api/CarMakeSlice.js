import { createSlice } from "@reduxjs/toolkit";
import { AuctionApi } from "./AuctionApi";
import { BodyApi } from "./BodyApi";
import { CarMakeApi } from "./CarMakeApi";
import { DamageApi } from "./DamageApi";
import { DetailCarApi } from "./DetailCarApi";
import { EngineApi } from "./EngineApi";
import { FuelApi } from "./FuelApi";
import { SellerApi } from "./SellerApi";
import { PowerApi } from "./PowerApi";
import { TotalApi } from "./TotalApi";

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
  total: [],
  totalStatus: null,
  data: {
    make: null,
    model: null,
    fuel_type: null, //done
    transmission: null, //done
    body_type: null, //done
    mileage: null, //done
    power: null, //done,
    co2: null, //done
    damage: null, //done
    colour: null, //done
    equipment: null, //done
    emission_standard: null, //done
    auction_type: null, //done
    country: null, //done
    seller: null, //done
    x_time: null, //done
    vat_regime: null, //done
    price: null, //done
    engine_size: null, //done
  },
  status: null,
  detailStatus: null,
};
const CarMakeReducer = createSlice({
  name: "carsMake",
  initialState,
  reducers: {
    setMake: (state, { payload }) => {
      state.data.make = payload;
    },
    setModel: (state, { payload }) => {
      state.data.model = payload;
    },
    setFuelType: (state, { payload }) => {
      state.data.fuel_type = payload;
    },
    setTransmission: (state, { payload }) => {
      state.data.transmission = payload;
    },
    setBodyType: (state, { payload }) => {
      state.data.body_type = payload;
    },
    setMileage: (state, { payload }) => {
      state.data.mileage = payload;
    },
    setPower: (state, { payload }) => {
      state.data.power = payload;
    },
    setCo2: (state, { payload }) => {
      state.data.co2 = payload;
    },
    setDamage: (state, { payload }) => {
      state.data.damage = payload;
    },
    setColour: (state, { payload }) => {
      state.data.colour = payload;
    },
    setEquipment: (state, { payload }) => {
      state.data.equipment = payload;
    },
    setEmission: (state, { payload }) => {
      state.data.emission_standard = payload;
    },
    setAution: (state, { payload }) => {
      state.data.auction_type = payload;
    },
    setCountry: (state, { payload }) => {
      state.data.country = payload;
    },
    setSeller: (state, { payload }) => {
      state.data.seller = payload;
    },
    setXtime: (state, { payload }) => {
      state.data.x_time = payload;
    },
    setVat: (state, { payload }) => {
      state.data.vat_regime = payload;
    },
    setPrice: (state, { payload }) => {
      state.data.price = payload;
    },
    setEngineSize: (state, { payload }) => {
      state.data.engine_size = payload;
    },
    resetData: (state) => {
      state.detailStatus = null;
      state.data = {
        make: null,
        model: null,
        fuel_type: null, //done
        transmission: null, //done
        body_type: null, //done
        mileage: null, //done
        power: null, //done,
        co2: null, //done
        damage: null, //done
        colour: null, //done
        equipment: null, //done
        emission_standard: null, //done
        auction_type: null, //done
        country: null, //done
        seller: null, //done
        x_time: null, //done
        vat_regime: null, //done
        price: null, //done
        engine_size: null, //done
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CarMakeApi.pending, (state, { payload }) => {
      state.status = "pending";
    });
    builder.addCase(CarMakeApi.fulfilled, (state, { payload }) => {
      state.cars = payload.data;
      state.status = "success";
      console.log(payload);
    });
    builder.addCase(DetailCarApi.pending, (state, { payload }) => {
      state.detailStatus = "pending";
      console.log(payload);
    });
    builder.addCase(DetailCarApi.fulfilled, (state, { payload }) => {
      state.detailStatus = "success";
      state.detail = payload.data;
      console.log(payload);
    });
    builder.addCase(FuelApi.fulfilled, (state, { payload }) => {
      state.fuel = payload.data;
      console.log(payload);
    });
    builder.addCase(BodyApi.fulfilled, (state, { payload }) => {
      state.bodys = payload;
      console.log(payload);
    });
    builder.addCase(EngineApi.fulfilled, (state, { payload }) => {
      state.engines = payload.data;
      console.log(payload);
    });
    builder.addCase(SellerApi.fulfilled, (state, { payload }) => {
      state.sellers = payload.data;
      console.log(payload);
    });
    builder.addCase(DamageApi.fulfilled, (state, { payload }) => {
      state.damages = payload.data;
      console.log(payload);
    });
    builder.addCase(AuctionApi.fulfilled, (state, { payload }) => {
      state.auctions = payload.data;
      console.log(payload);
    });
    builder.addCase(PowerApi.fulfilled, (state, { payload }) => {
      state.power = payload.data?.value;
      // console.log(payload)
    });
    builder.addCase(TotalApi.pending, (state, { payload }) => {
      state.totalStatus = "pending";
    });
    builder.addCase(TotalApi.fulfilled, (state, { payload }) => {
      state.totalStatus = "success";
      state.total = payload;
    });
  },
});

export default CarMakeReducer.reducer;
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
  setMake,
  setModel,
  resetData,
} = CarMakeReducer.actions;
