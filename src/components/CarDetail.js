import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const CarDetail = () => {
  const { total } = useSelector((store) => store.carList)
  return (
    <Box sx={{ width: 1200, margin: '10px auto' }}>
      <Paper
        sx={{
          height: '30px',
          padding: '10px 10px',
          fontWeight: 'bold',
          fontSize: '20px',
          color: '#A8C000',
          position: 'sticky',
          top: '5px',
          zIndex: 1,
        }}
      >
        {`${total?.total} results`}
      </Paper>
      {total.data?.map((total) => (
        <Paper sx={{ margin: '30px 0', padding: '5px' }}>
          <Typography
            sx={{ fontSize: '20px' }}
          >{`${total.name}-${total.fuel_type}-${total.transmission}`}</Typography>
          <Typography
            sx={{ opacity: 0.8 }}
          >{`${total.auction_type}`}</Typography>
          <Grid container spacing={1}>
            <Grid item>
              <img
                src={total.image_path}
                width="250px"
                height="250px"
                alt="car"
              />
            </Grid>
            <Grid item>
              <Stack margin="0 5px">
                <Box>
                  <strong>Estimated Price</strong>
                  <Typography fontSize={20}>
                    <strong>{total.price}</strong>
                  </Typography>
                </Box>
                <Stack direction="row" spacing={3} marginTop={3}>
                  <Typography>{`${total.g_km} g/km (${total.emission_standard})`}</Typography>
                  <Typography>{`${total.power_kw} (${total.power_hp})`}</Typography>
                  <Typography>{total.origin_country}</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  )
}

export default CarDetail
