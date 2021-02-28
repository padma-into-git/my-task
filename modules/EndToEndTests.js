import { PAGE_URL } from '../utility/page-url';
import { Page, PageObject } from '../page-models/pages/factory/page';
import { users } from '../mock-data/user-data';

const user = users[1];

const loginPage = PageObject(Page.LOGIN_PAGE);
const registrationPage = PageObject(Page.REGISTRATION_PAGE);
const homePage = PageObject(Page.HOME_PAGE);

fixture`RegistrationPageTests`.beforeEach(async (t) => {
  await t.navigateTo(PAGE_URL.LOGIN_PAGE);
});

test('Verify End to End Flow', async (t) => {
  //user registration
  await loginPage.verifyLoginPage(t);
  await loginPage.clickOnTheRegisterButton(t);
  await registrationPage.verifyRegistrationPage(t);
  await registrationPage.fillingOutTheRegistrationForm(t, user.username, user.password, user.firstName, user.lastName);
  await registrationPage.clickOnTheRegisterButton(t);
  await loginPage.verifyLoginPage(t);

  //user login
  await loginPage.fillOutLoginFormAndSubmit(t, user.username, user.password);
  await homePage.verifyHomePage(t);

  //user delete
  await homePage.deleteUser(t, user.firstName, user.lastName);
  await homePage.verifyDeleteUser(t, user.firstName, user.lastName);

  //user logout
  await homePage.logout(t);
  await loginPage.verifyLoginPage(t);
});
