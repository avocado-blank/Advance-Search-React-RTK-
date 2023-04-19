import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Container, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: 'white',
        width: '100%',
        height: '140px',
      }}
    >
      <Container sx={{ margin: '0 auto', height: '70px' }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <img
            src="https://www.adesa.eu/v6/images/adesa-logo-desktop.svg"
            alt="logo"
            width="250px"
            height="100px"
            style={{ cursor: 'pointer' }}
          />
          <Stack direction="row" spacing={2}>
            <Button
              color="inherit"
              variant="outlined"
              sx={{ color: '#078C95', fontWeight: 'bold' }}
            >
              Logout
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Container sx={{ margin: '0 auto', height: '70px' }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ height: '70px' }}
          alignItems="flex-end"
        >
          <Button
            sx={{
              color: 'black',
              fontWeight: 'bold',
              borderRadius: 0,
              '&:hover': {
                color: '#078C95',
              },
            }}
          >
            Home
          </Button>
          <Link to="/">
            <Button
              sx={{
                color: 'black',
                fontWeight: 'bold',
                borderRadius: 0,
                borderBottom: '3px solid #078C95',
                '&:hover': {
                  color: '#078C95',
                },
              }}
            >
              Find Cars
            </Button>
          </Link>
          <Button
            sx={{
              color: 'black',
              fontWeight: 'bold',
              borderRadius: 0,
              '&:hover': { color: '#078C95' },
            }}
          >
            Auctions
          </Button>
          <Button
            sx={{
              color: 'black',
              fontWeight: 'bold',
              borderRadius: 0,
              '&:hover': { color: '#078C95' },
            }}
          >
            Sell
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
