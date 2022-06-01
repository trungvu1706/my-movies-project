import axios from 'axios'
import queryString from 'query-string'

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  paramsSerializer: (params) => queryString.stringify(params),
})

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { data, status, config } = error.response
    if (status === 401 && config.url === 'movie/3/lists') {
      const errorMessage = data?.status_message
      throw new Error(errorMessage)
    }
    return Promise.reject(error)
  }
)

export default request
