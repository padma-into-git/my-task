import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import RegistrationPage from '../RegistrationPage';

export const Page = {
  LOGIN_PAGE: 'Login Page',
  REGISTRATION_PAGE: 'Registration Page',
  HOME_PAGE: 'Home Page',
};

export const PageObject = function (page) {
  switch (page) {
    case Page.LOGIN_PAGE:
      return new LoginPage();
    case Page.REGISTRATION_PAGE:
      return new RegistrationPage();
    case Page.HOME_PAGE:
      return new HomePage();
  }
};
