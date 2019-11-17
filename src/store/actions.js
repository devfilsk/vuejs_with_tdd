import api from '@/services/api'
import login from '@/services/login'
import * as types from './mutation-types';

export const SEARCH_USER = ({ commit }, { username }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await api.searchUser(username)
      console.log(user)
      commit(types.SET_USER, user)
      resolve(user)
    } catch(error) {
      reject(error)
    }
  })
}

export const LOGAR = ({ commit }) => {
  
}


