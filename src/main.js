import './assets/main.css'

import { createApp } from 'vue'
import store from './vuex/store.js'
import App from './App.vue'
import router from './router'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            next({
                path: '/login',
            })
        } else {
            next();
        }
    } else {
        next();
    }
});

const app = createApp(App)

app.use(store)
app.use(router)
app.use(createVuestic())

app.mount('#app')
