import React from 'react'
import { Skeleton, Box, Grid } from '@mui/material'

const SkeletonProgress = ({ length = 6 }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={1}>
        {Array.from(new Array(length)).map((item, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Skeleton variant="rectangular" width="100%" height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default SkeletonProgress
