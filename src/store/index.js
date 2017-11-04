import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cache: {}
    },
    mutations: {
        'UPDATE_CACHE' (state, payload) {
            Vue.set(state.cache, payload.path, payload.result)
        }
    },
    actions: {
        async 'FETCH_PATH' ({ commit, state }, { hostPath, targetPath }) {
            const result = await fetch(`/v1/${targetPath}`)
                .then(res => {
                    if (!res.ok) {
                        throw Error(res.statusText)
                    }
                    return res.json()
                })
                .catch(err => {
                    console.log(err)
                })
            commit('UPDATE_CACHE', { path: hostPath, result })
        }
    }
})
