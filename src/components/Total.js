import { Box, Button } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'

const Total = () => {
  return (
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
          sx={{
            position: 'absolute',
            right: 155,
            padding: '10px 35px',
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: '#078C95',
            '&:hover': { backgroundColor: '#078C95', borderColor: '#078C95' },
          }}
          endIcon={<SearchIcon />}
        >
          SHOW 8,000 VEHICLES
        </Button>
      </Link>
    </Box>
  )
}

export default Total
