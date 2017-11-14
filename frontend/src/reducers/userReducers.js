let initState = {
  user: {
      user: '',
      token: '',
      profile: {}
  }
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, ...action.payload };

    case 'UPDATE_USER':
      return { ...state, ...action.payload };

    default:
      return state; 
  }
};

export { userReducer };