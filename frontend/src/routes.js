import SignIn from './containers/SignIn';
import UserPreference from './containers/UserPreference';

const routes = [
  {
    path: '/',
    component: SignIn
  },
  {
    path: '/UserPreference',
    component: UserPreference
  }
];

export default routes;