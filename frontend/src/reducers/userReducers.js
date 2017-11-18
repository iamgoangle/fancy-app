let initState = {
  user: {
      user: '',
      token: '',
      profile: {}
  },
  isAuthenticated: (window.localStorage.getItem('token')) ? true : false
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_USER_PROFILE':
      return { ...state, ...action.payload };
    
    case 'SIGNUP_USER':
      return { ...state, ...action.payload };

    case 'LOGIN_USER':
      return { ...state, ...action.payload };
    
    case 'UPDATE_USER_PREFERENCE':
      return { ...state, ...action.payload };

    case 'SUBMIT_CHANGE_USER_PREFERENCE':
      return { ...state, ...action.payload };

    case 'UPDATE_USER':
      return { ...state, ...action.payload };

    default:
      return state; 
  }
};

export { userReducer };