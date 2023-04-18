import { Box, Paper } from '@mui/material'
import React from 'react'

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
        }}
      >
        {`${total?.total} results`}
      </Paper>
    </Box>
  )
}

export default CarDetail
