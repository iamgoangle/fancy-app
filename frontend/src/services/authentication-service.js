const setStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

const getUserIdentity = () => {
  return window.localStorage.getItem('user');
};

const getUserToken = () => {
  return window.localStorage.getItem('token');
};

const delUserToken = () => {
  window.localStorage.removeItem('token');
}

const isLoggedIn = () => {
  const userToken = getUserToken();
  return (userToken) ? true : false;
}

export {
  setStorage,
  getUserIdentity,
  getUserToken,
  delUserToken,
  isLoggedIn
};