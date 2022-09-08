import Login from "./pages/Login/Login.vue";
import Home from "./pages/Home/Home.vue";
import isAuthenticated from "./middlewares/isAuthenticated";

export const routes = [
    { 
        path: '/',
        name: 'Login', 
        component: Login
    },
    { 
        path: '/home', 
        name: 'Home',
        component: Home,
        beforeEnter: isAuthenticated
    }
]