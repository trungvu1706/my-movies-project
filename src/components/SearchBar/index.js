import React from 'react'
import { TextField, Box, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search something..."
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}

export default SearchBar
