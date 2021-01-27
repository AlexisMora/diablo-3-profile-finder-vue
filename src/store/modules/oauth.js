// @ is an alias for /src
import * as oauth from '@/api/oauth'

export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    }
  },
  actions: {
    // getToken function receives `context` object as parameter
    // thanks to Javascript's destructuring, we can get `commit` as argument
    async getToken ({ commit }) {
      commit('loading/SET_LOADING', true, { root: true })

      oauth.getToken()
        .then(({ data }) => {
          commit('SET_ACCESS_TOKEN', data.access_token)
        })
        .catch((error) => {
          commit('SET_ACCESS_TOKEN', null)
          console.log('Error oAuth: ', error)
        })
        .finally(() => {
          commit('loading/SET_LOADING', false, { root: true })
        })
    }

  }
}
