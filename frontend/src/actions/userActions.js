import request from 'request-promise';
import APP_CONFIG from '../config/config';

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
            user: response.data.user,
            token: response.data.token,
            profile: response.data.profile
          }
        });
      });
  }
};

const updateUserPreference = (form) => {
  return (dispatch) => {
    const userIdForUpdate = { 'local.username': form.userPreference.user };
    const formData = { ...form };
    const payload = {
      content: {
        category_list: formData.category_list.checked
      },
      privacy: {
        message: formData.category_list.checked,
        profile_visibility: formData.category_list.checked
      },
      localization: {
        currency: formData.currency.selected,
        timezone: formData.timezone.selected,
        lang: formData.language.selected
      }
    };

    const options = {
      uri: `${APP_CONFIG.api_endpoint}/updateUserPreference`,
      method: 'POST',
      body: {
        userIdForUpdate,
        payload
      },
      json: true
    };

    return request(options)
      .then(response => {
        console.log(response);
        dispatch ({
          type: 'UPDATE_USER',
          payload: {
            user: response.user.local.username,
            preference: response.user
          }
        });
      });
  }
};

export {
  loginUser,
  updateUserPreference
};