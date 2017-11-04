import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import FrontPage from '@/components/FrontPage'
import EpisodeGrid from '@/components/EpisodeGrid'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'front-page',
            component: FrontPage,
            beforeEnter: (to, from, next) => fetchPath(to, from, next, 'shows')
        },
        {
            path: '/:show/:episode?',
            name: 'episode-grid',
            component: EpisodeGrid,
            beforeEnter: (to, from, next) => fetchPath(to, from, next, `shows/${to.params.show}`)
        }
    ]
})

const fetchPath = (to, from, next, target) => {
    // try to fetch from state cache
    store.dispatch('FETCH_PATH', { hostPath: to.path, targetPath: target })

    next()
}

export default router
