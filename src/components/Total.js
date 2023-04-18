import { Box, Button } from '@mui/material'
import React, { useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TotalApi } from '../features/Make&Model/api/TotalApi'

const Total = () => {
  const { total, status, data, totalStatus } = useSelector(
    (store) => store.carList,
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(TotalApi(data))
  }, [data])
  //log
  return (
    <>
      {status === 'success' ? (
        <Box
          sx={{
            position: 'sticky',
            top: 650,
            zIndex: 1,
            backgroundColor: 'red',
          }}
        >
          <Link to="/detail">
            <Button
              variant="contained"
              disabled={
                totalStatus === 'pending' || total?.total === 0 ? true : false
              }
              sx={{
                position: 'absolute',
                right: 155,
                padding: '10px 35px',
                color: 'white',
                fontWeight: 'bold',
                backgroundColor: '#078C95',
                '&:hover': {
                  backgroundColor: '#078C95',
                  borderColor: '#078C95',
                },
              }}
              endIcon={<SearchIcon />}
            >
              {totalStatus === 'pending'
                ? 'Loading Result'
                : `SHOW ${total?.total} VEHICALS`}
            </Button>
          </Link>
        </Box>
      ) : (
        <></>
      )}
    </>
  )
}

export default Total
