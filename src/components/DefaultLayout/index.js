import { Box, Container } from '@mui/material'
import React from 'react'
import NavBar from '../NavBar'

const DefaultLayout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Container disableGutters>
        <Box>{children}</Box>
      </Container>
    </Box>
  )
}

export default DefaultLayout
