import axios from 'axios'

const request = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/movie/3/lists?api_key=39f85886377c4b2965f31f637693b886&language=en-US&page=1',
})

export const getMovieList = async (params, options = {}) => {
  const res = await request.get(params, options)
  return res.data
}

export default request
