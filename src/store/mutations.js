import * as types from './mutation-types'

const mutations = {
  [types.SET_LOGIN]: (state, data) => {
    localStorage.token = data
    state.token = data
  },
  [types.SET_LOGOUT]: (state) => {
    localStorage.removeItem('token')
    state.token = null
  },
  [types.SET_TITLE]: (state, data) => {
    state.title = data
  }
}

export default mutations
