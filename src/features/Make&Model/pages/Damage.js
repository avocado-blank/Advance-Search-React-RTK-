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
import { setDamage } from "../api/CarMakeSlice";
import { DamageApi } from "../api/DamageApi";
import { useLocation } from "react-router-dom";

const Damage = ({ damageChecked, setDamageChecked }) => {
  //Variabels
  const { damages, status } = useSelector((store) => store.carList);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const damageName = damageChecked.join(", ");
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
      dispatch(DamageApi(data));
    }
  }, [location.pathname]);

  useEffect(() => {
    dispatch(setDamage(damageName));
  }, [damageChecked]);

  //functions
  const handleClick = () => {
    setOpen(!open);
  };

  const handleChangeCheck = (event) => {
    const checkedValue = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setDamageChecked([...damageChecked, checkedValue]);
    } else {
      setDamageChecked(damageChecked.filter((value) => value !== checkedValue));
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
                Damage
              </Typography>
            </ListItemText>
            {!open ? <Typography>{damageName}</Typography> : ""}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container spacing={3} m={2}>
              {damages?.map((damage) => (
                <Grid item xs={4} key={damage.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={damageChecked.includes(damage.name)}
                        onChange={handleChangeCheck}
                        value={damage.name}
                      />
                    }
                    label={damage.name}
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

export default Damage;
