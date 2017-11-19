import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import UserPreference from './containers/UserPreference';

const routes = [
  {
    path: '/',
    component: SignIn,
    requireAuth: false
  },
  {
    path: '/signup',
    component: SignUp,
    requireAuth: false
  },
  {
    path: '/UserPreference',
    component: UserPreference,
    requireAuth: true
  }
];

export default routes;