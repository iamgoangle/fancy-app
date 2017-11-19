import request from 'request-promise';
import APP_CONFIG from '../config/config';
import { getUserToken } from '../services/authentication-service';

const signUpUser = (form) => {
  return (dispatch) => {
    const options = {
      uri: `${APP_CONFIG.API_ENDPOINT}/user/signup`,
      method: 'POST',
      form: { ...form },
      json: true
    };
    
    return request(options)
    .then(response => {
      dispatch ({
        type: 'SIGNUP_USER',
        payload: { ...response }
      });
    })
    .catch(err => {
      dispatch ({
        type: 'SIGNUP_USER',
        payload: { ...err }
      });
    });
  };
};

const loginUser = (form) => {
  return (dispatch) => {
    const options = {
      uri: `${APP_CONFIG.API_ENDPOINT}/login`,
      method: 'POST',
      form: { ...form },
      json: true
    };
  
    return request(options)
    .then(response => {
      dispatch ({
        type: 'LOGIN_USER',
        payload: {
          user : {
            user: response.data.user,
            token: response.data.token,
            profile: response.data.profile
          },
          isAuthenticated: true
        }
      });
    });
  }
};

const getUserProfile = (username) => {
  return (dispatch) => {
    const options = {
      uri: `${APP_CONFIG.API_ENDPOINT}/user/${username}`,
      method: 'POST',
      headers: {
        'x-access-token': getUserToken()
      },
      json: true
    };
  
    return request(options)
      .then(response => {
        console.log(response);
        dispatch ({
          type: 'GET_USER_PROFILE',
          payload: {
            user : {
              user: response.data.user,
              token: getUserToken(),
              profile: response.data.profile
            },
            isAuthenticated: true
          }
        });
      });
  }
};

const updateUserPreference = (userPayload) => {
  return {
    type: 'UPDATE_USER_PREFERENCE',
    payload: { 
      user: { 
        ...userPayload 
      } 
    }
  };
};

const submitChangeUserPreference = (user) => {
  return (dispatch) => {
    const userIdForUpdate = user.user.user;
    const newProfile = user.user.profile;

    const options = {
      uri: `${APP_CONFIG.API_ENDPOINT}/user/updateUserPreference`,
      method: 'PATCH',
      body: {
        userIdForUpdate: userIdForUpdate,
        payload: newProfile
      },
      headers: {
        'x-access-token': getUserToken()
      },
      json: true
    };

    return request(options)
      .then(response => {
        console.log(response);
        dispatch ({
          type: 'SUBMIT_CHANGE_USER_PREFERENCE',
          payload: {
            user : {
              user: response.data.user,
              token: getUserToken(),
              profile: response.data.profile
            },
            isAuthenticated: true
          }
        });
      });
  }
};

export {
  loginUser,
  signUpUser,
  getUserProfile,
  updateUserPreference,
  submitChangeUserPreference
};