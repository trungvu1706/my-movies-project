import React from 'react'
import { Box, Typography, Chip } from '@mui/material'
import { movie_1 } from '~/assets/images'
import {
  movieContentWrapper,
  storyLineContent,
  imageWrapper,
  categoriesStyle,
  contentFontStyle,
  informationStyle,
} from './styles'
import { categories } from './constants'

const DetailMovieContent = () => {
  return (
    <Box sx={movieContentWrapper}>
      <Box sx={imageWrapper}>
        <img src={movie_1} alt="image_detail" />
      </Box>

      <Box sx={storyLineContent}>
        <Box sx={{ p: 1 }}>
          <Typography variant="h3">Story Line</Typography>
          <Typography variant="body1" sx={contentFontStyle}>
            Thor's retirement is interrupted by a galactic killer known as Gorr
            the God Butcher, who seeks the extinction of the gods
          </Typography>
          <Box sx={informationStyle}>
            <Typography variant="h5" sx={{ mr: 1 }}>
              Director
            </Typography>
            <Typography variant="body2" sx={contentFontStyle}>
              Vu Tien Trung
            </Typography>
          </Box>
          <Box sx={informationStyle}>
            <Typography variant="h5" sx={{ mr: 1 }}>
              Cast
            </Typography>
            <Typography variant="h5" sx={contentFontStyle}>
              Cast
            </Typography>
          </Box>
          <Box sx={informationStyle}>
            <Typography variant="h5" sx={{ mr: 1 }}>
              Production
            </Typography>
            <Typography variant="h5" sx={contentFontStyle}>
              Production
            </Typography>
          </Box>
          <Box sx={categoriesStyle}>
            {categories.map((category, index) => (
              <Chip
                key={index}
                label={category}
                variant="outlined"
                sx={{ fontSize: '10px', cursor: 'pointer' }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailMovieContent
