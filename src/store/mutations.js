import * as types from './mutation-types'

const mutations = {
  [types.LOGIN]: (state, data) => {
    localStorage.token = data
    state.token = data
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('token')
    state.token = null
  },
  [types.TITLE]: (state, data) => {
    state.title = data
  }
}

export default mutations
