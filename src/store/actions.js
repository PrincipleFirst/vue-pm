import * as types from './mutation-types'

export const logout = function ({commit}) {
  commit(types.SET_LOGOUT, window.localStorage.getItem('token'))
}
