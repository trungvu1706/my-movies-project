import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MovieItem from '~/components/MovieItem'
import { getMovieList } from '~/utils/request'
import Skeleton from '~/components/Skeleton'

const HomePage = () => {
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchMovieList = async () => {
      setIsLoading(true)
      const data = await getMovieList()
      setMovieList(data.results)
      setIsLoading(false)
    }

    fetchMovieList()
  }, [])

  return (
    <Box
      sx={{
        mt: 3,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
      {isLoading ? (
        <Skeleton length={movieList.length} />
      ) : (
        <Grid container spacing={1}>
          {movieList.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={2}>
              <MovieItem
                movieTitle={item.name}
                imageUrl={item.poster_path}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default HomePage
