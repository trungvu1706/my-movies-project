import ShareIcon from '@mui/icons-material/Share'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { menuList } from './constants'
import DetailMovieContent from './DetailMovieContent'
import { colorFont, listContainer, menuListStyle } from './styles'

const DetailMovie = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Box>
        <Typography variant="h2">Thor: Tình Yêu Và Sấm Sét</Typography>
        <Box>
          <Typography variant="h5" sx={colorFont} gutterBottom>
            Original title: Thor: Love and Thunder
          </Typography>
          <Typography variant="h5" sx={colorFont}>
            2022
          </Typography>
        </Box>
      </Box>

      <Box sx={listContainer}>
        <Box component="ul" sx={menuListStyle}>
          {menuList.map((menu, index) => (
            <Box key={index} component="li">
              {menu}
            </Box>
          ))}
          <ShareIcon
            fontSize="large"
            sx={{ borderLeft: '1xp solid #cccccc' }}
          />
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <DetailMovieContent />
      </Box>
    </Box>
  )
}

export default DetailMovie
