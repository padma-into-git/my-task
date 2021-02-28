import { PAGE_URL } from '../utility/page-url';
import { Page, PageObject } from '../page-models/pages/factory/page';
import { users } from '../mock-data/user-data';

const user = users[1];

const loginPage = PageObject(Page.LOGIN_PAGE);
const registrationPage = PageObject(Page.REGISTRATION_PAGE);

fixture`RegistrationPageTests`.beforeEach(async (t) => {
  await t.navigateTo(PAGE_URL.LOGIN_PAGE);
});

test('Verify Routing back to Login Page on cancelling the Registration', async (t) => {
  await loginPage.verifyLoginPage(t);
  await loginPage.clickOnTheRegisterButton(t);
  await registrationPage.verifyRegistrationPage(t);
  await registrationPage.clickOnTheCancelButton(t);
  await loginPage.verifyLoginPage(t);
});

test('Verify Successful Registration on Filling & submitting the Registration', async (t) => {
  await loginPage.verifyLoginPage(t);
  await loginPage.clickOnTheRegisterButton(t);
  await registrationPage.verifyRegistrationPage(t);
  await registrationPage.fillingOutTheRegistrationForm(t, user.username, user.password, user.firstName, user.lastName);
  await registrationPage.clickOnTheRegisterButton(t);
  await loginPage.verifyLoginPage(t);
});
