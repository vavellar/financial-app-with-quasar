import { store } from "../store";
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

interface NavigationGuard {
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
}

export default function isAuthenticated(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    const user = store.state.auth.user
    if(!user && to.path !== '/login') {
        return next({ name: 'Login'})
    }

    next()
}