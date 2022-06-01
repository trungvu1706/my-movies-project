import request from '~/utils/request'

export const movieApi = {
  getMovieList: async (params) => {
    const url = 'movie/3/lists'
    const res = await request.get(url, { params })
    return res
  },

  getMovieDetail: async (id, params) => {
    const url = `movie/${id}`
    const res = await request.get(url, { params })
    return res
  },
}
