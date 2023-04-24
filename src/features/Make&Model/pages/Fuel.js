import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Checkbox,
  Collapse,
  FormControlLabel,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFuelType } from "../api/CarMakeSlice";
import { FuelApi } from "../api/FuelApi";
import { useLocation } from "react-router-dom";

const Fuel = ({ fuelChecked, setFuelChecked }) => {
  //Variabels
  const { fuel, status } = useSelector((store) => store.carList);
  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();
  const fuelName = fuelChecked.join(", ");
  const location = useLocation();
  //Hook
  useEffect(() => {
    if (localStorage.getItem("data")) {
      const local = JSON.parse(localStorage.getItem("data"));
      let token = local?.data.auth_token;
      let id = local?.data.id;
      let data = {
        token,
        id,
      };
      dispatch(FuelApi(data));
    }
  }, [location.pathname]);

  useEffect(() => {
    dispatch(setFuelType(fuelName));
  }, [fuelChecked]);

  //functions
  const handleClick = () => {
    setOpen(!open);
  };

  const handleChangeCheck = (event) => {
    const checkedValue = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setFuelChecked([...fuelChecked, checkedValue]);
    } else {
      setFuelChecked(fuelChecked.filter((value) => value !== checkedValue));
    }
  };

  //console
  console.log(fuel);
  // console.log(checked)
  console.log(fuelName);
  return (
    <>
      {status === "success" ? (
        <List
          sx={{ width: "100%", bgcolor: "white", marginTop: 2 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText>
              <Typography variant="h6" fontWeight={700}>
                Fuel Types
              </Typography>
            </ListItemText>
            {!open ? <Typography>{fuelName}</Typography> : ""}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container spacing={3} m={2}>
              {fuel?.map((fuel) => (
                <Grid item xs={4} key={fuel.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={fuelChecked.includes(fuel.name)}
                        onChange={handleChangeCheck}
                        value={fuel.name}
                      />
                    }
                    label={fuel.name}
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
  );
};

export default Fuel;
