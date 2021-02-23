import Login from '../components/login/index';
import Register from '../components/register/index';
import Home from '../components/home/index';
import ListUserComponent from '../components/users/ListUserComponent';
import Dashboard from '../components/Dashboard';
export const routes = [
    {
        path: '/',
        exact: true,
        name: 'Login',
        component: Login
    },
    {
        path: '/login',
        // exact: true,
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/users',
        name: 'Users',
        component: ListUserComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    }
    
]