import axios from 'axios'

export function getProjects() {
  const url = '/api/getProjects'
  return axios.get(url).then((res) => {
    console.log(res)
    return Promise.resolve(res.data)
  })
}
