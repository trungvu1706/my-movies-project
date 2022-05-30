import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material'
import React from 'react'
import { useNavigate, useParams, Outlet } from 'react-router-dom'
import { movie_1 } from '~/assets/images'
import {
  cardTitle,
  cardWrapper,
  image,
  cardDescription,
  linkStyle,
} from './styles'

const MovieItem = ({ imageUrl, movieTitle, description }) => {
  const navigate = useNavigate()
  const { id } = useParams
  return (
    <Card sx={cardWrapper}>
      <CardMedia
        component="img"
        image={imageUrl || movie_1}
        alt="image"
        sx={image}
      />
      <CardContent>
        <Typography variant="h5" sx={cardTitle}>
          {movieTitle}
        </Typography>
        <Typography variant="h6" sx={cardDescription}>
          {description || 'No Description'}
        </Typography>
        <Link
          onClick={() => {
            navigate('/detail')
          }}
          sx={linkStyle}>
          Detail...
        </Link>
      </CardContent>
      <Outlet />
    </Card>
  )
}

export default MovieItem
