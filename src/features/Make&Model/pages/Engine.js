import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  FormControl,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEngineSize } from "../api/CarMakeSlice";
import { EngineApi } from "../api/EngineApi";
import { useLocation } from "react-router-dom";

const Engine = ({
  fromValueEngine,
  toValueEngine,
  setFromValueEngine,
  setToValueEngine,
}) => {
  //Variabels
  const { engines, status } = useSelector((store) => store.carList);
  const [open, setOpen] = useState(true);
  const options = engines;
  const dispatch = useDispatch();
  const engineName = `${fromValueEngine},${toValueEngine}`;
  const location = useLocation();
  //Hook
  useEffect(() => {
    dispatch(setEngineSize(engineName));
  }, [fromValueEngine, toValueEngine]);
  useEffect(() => {
    if (localStorage.getItem("data")) {
      const local = JSON.parse(localStorage.getItem("data"));
      let token = local?.data.auth_token;
      let id = local?.data.id;
      let data = {
        token,
        id,
      };
      dispatch(EngineApi(data));
    }
  }, [location.pathname]);
  //functions
  const handleClick = () => {
    setOpen(!open);
  };

  const handleFromChange = (event) => {
    const value = event.target.value;
    setFromValueEngine(value);
    if (value !== "Any" && value >= toValueEngine) {
      // setToValue(options[options.indexOf(value)])
      setToValueEngine("Any");
    }
  };

  const handleToChange = (event) => {
    const value = event.target.value;
    setToValueEngine(value);
    if (value !== "Any" && value <= fromValueEngine) {
      setFromValueEngine(options[options.indexOf(value)]);
    } else if (value === "Any") {
      setFromValueEngine("Any");
    }
  };
  const getToOptions = () => {
    if (fromValueEngine === "Any") {
      return options;
    } else {
      return options.slice(options.indexOf(fromValueEngine));
    }
  };

  const getFromOptions = () => {
    if (toValueEngine === "Any") {
      return options;
    } else {
      return options.slice(0, options.indexOf(toValueEngine) + 1);
    }
  };
  //console
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
                Engine Size
              </Typography>
            </ListItemText>
            {!open && fromValueEngine && toValueEngine !== "Any" ? (
              <Typography>
                {fromValueEngine} - {toValueEngine}
              </Typography>
            ) : (
              ""
            )}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Stack direction="row" spacing={2} m={2}>
              <FormControl>
                <Select value={fromValueEngine} onChange={handleFromChange}>
                  <MenuItem value="Any">Any</MenuItem>
                  {getFromOptions().map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <Select value={toValueEngine} onChange={handleToChange}>
                  <MenuItem value="Any">Any</MenuItem>
                  {getToOptions().map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Collapse>
        </List>
      ) : (
        <></>
      )}
    </>
  );
};

export default Engine;
