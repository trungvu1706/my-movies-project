import request from '~/utils/request'

export const getMovieList = async (params) => {
  const url = 'movie/3/lists'
  const res = await request.get(url, { params })
  return res
}
