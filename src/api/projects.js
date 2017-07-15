import axios from 'axios'

export function getProjects() {
  const url = '/api/getProjects'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
