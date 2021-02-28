import config from '../config/config';

export const getBaseUrl = () => {
  return config[process.env.NODE_ENV].BASE_URL ? config[process.env.NODE_ENV].BASE_URL : 'http://localhost:8080';
};

export const PAGE_URL = {
  LOGIN_PAGE: getBaseUrl() + '/login',
  REGISTRATION_PAGE: getBaseUrl() + '/register',
  HOME_PAGE: getBaseUrl(),
};
