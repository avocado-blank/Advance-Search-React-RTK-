import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import {
  Autocomplete,
  Box,
  Checkbox,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { CarMakeApi } from '../api/CarMakeApi'
import { DetailCarApi } from '../api/DetailCarApi'
import { CheckBoxOutlineBlankOutlined } from '@mui/icons-material'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { setMake, setModel } from '../api/CarMakeSlice'
import { TotalApi } from '../api/TotalApi'

const Car = ({ selectModel, setSelectModel, selectValue, setSelectValue }) => {
  //Variabels
  const { cars, detail, status } = useSelector((store) => store.carList)
  const [open, setOpen] = useState(true)

  let displayName
  const modelsList = detail?.models
  const icon = <CheckBoxOutlineBlankOutlined fontSize="small" />
  const checkedIcon = <CheckBoxIcon fontSize="small" />
  const dispatch = useDispatch()
  const models = []
  selectModel.forEach((model) => models.push(model.name))
  const modelName = models?.join(', ')

  //Hook

  useEffect(() => {
    dispatch(setMake(displayName))
    dispatch(setModel(modelName))
  }, [selectValue, selectModel])
  useEffect(() => {
    if (localStorage.getItem('data')) {
      const local = JSON.parse(localStorage.getItem('data'))
      let token = local?.data.auth_token
      let id = local?.data.id
      let data = {
        token,
        id,
      }
      dispatch(CarMakeApi(data))
    }
  }, [])

  //function
  if (selectValue) {
    displayName = selectValue.name
  } else {
    displayName = ''
  }
  const handleClick = () => {
    setOpen(!open)
  }

  const handleChange = (e, value) => {
    setSelectValue(value)
    setSelectModel([])
    if (localStorage.getItem('data')) {
      const local = JSON.parse(localStorage.getItem('data'))
      let token = local?.data.auth_token
      let id = local?.data.id
      let data = {
        token,
        id,
        carid: value?.id ? value.id : '',
      }
      dispatch(DetailCarApi(data))
    }
  }

  const handleChangeModel = (e, value) => {
    setSelectModel(typeof value === 'string' ? value.split(',') : value)
  }

  //log
  // console.log(cars)
  console.log(displayName)
  // console.log(modelName)

  return (
    <>
      {status === 'success' ? (
        <List
          sx={{ width: '100%', bgcolor: 'white', marginTop: 2 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText>
              <Typography variant="h6" fontWeight={700}>
                Make & Model
              </Typography>
            </ListItemText>
            {!open ? <Typography>{displayName}</Typography> : ''}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Stack direction="row" justifyContent="space-between">
              <Box width={400} m={2}>
                <Autocomplete
                  options={cars ? cars : []}
                  getOptionLabel={(option) => option.name}
                  isOptionEqualToValue={(option, value) =>
                    option.value === value.value
                  }
                  value={selectValue}
                  onChange={handleChange}
                  noOptionsText="No Match Item"
                  renderInput={(parms) => (
                    <TextField {...parms} label="Search Makes"></TextField>
                  )}
                />
              </Box>

              <Box width={700} m={2}>
                <Autocomplete
                  multiple
                  limitTags={6}
                  id="checkboxes-tags-demo"
                  value={selectModel}
                  onChange={handleChangeModel}
                  options={modelsList ? modelsList : []}
                  disableCloseOnSelect
                  disabled={selectValue ? false : true}
                  getOptionLabel={(option) => option.name}
                  noOptionsText="No Models"
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.name}
                    </li>
                  )}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <React.Fragment key={option.id}>
                        {option.id !== 0 && ', '}
                        {option.name}
                      </React.Fragment>
                    ))
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Models" />
                  )}
                />
              </Box>
            </Stack>
          </Collapse>
        </List>
      ) : (
        <>Loading</>
      )}
    </>
  )
}

export default Car
