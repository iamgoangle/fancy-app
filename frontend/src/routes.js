import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import UserPreference from './containers/UserPreference';

const routes = [
  {
    path: '/',
    component: SignIn
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/UserPreference',
    component: UserPreference
  }
];

export default routes;