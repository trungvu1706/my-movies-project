import { Box, Button } from '@mui/material'
import React from 'react'
import { logo } from '~/assets/images'
import SearchBar from '../SearchBar'
import { buttonLabelList } from './constants'
import {
  buttonGroup,
  navBarInner,
  navBarWrapper,
  searchBarWrapper,
} from './styles'

const NavBar = () => {
  return (
    <Box sx={navBarWrapper} component="header">
      <Box sx={navBarInner}>
        <img src={logo} alt="logo" />

        <Box sx={searchBarWrapper}>
          <SearchBar />
        </Box>
        <Box sx={buttonGroup}>
          {buttonLabelList.map((label, index) => (
            <Box key={index}>
              <Button variant="text" sx={{ fontSize: '14px' }}>
                {label}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar
