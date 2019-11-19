import * as types from './mutation-types';

export default {
    [types.SET_USER](state, user) {
        let hasUser = state.user.filter(v => v.id == user.id)
        console.log("AQUI", hasUser)
        if(!hasUser.length){
            state.user.push(user)
        }
    },
    [types.SET_TOKEN](state, payload) {
        state.token = payload
    },
    [types.REMOVE_USER](state, payload) {
        state.user = state.user.filter(v => v.id != payload);
    },
    [types.ADD_USER](state, payload) {
        let hasUser = state.user.filter(v => v.id == user.id)
        console.log("AQUI", hasUser)
        if(!hasUser.length){
            state.user.push(user)
        }
    }
}