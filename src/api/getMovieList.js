import { getMovieList } from '~/utils/request'
export const fetchMovieListData = async () => {
  try {
    const res = await getMovieList()
    return res
  } catch (error) {
    console.log('loi roi', error)
  }
}
