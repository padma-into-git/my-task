import { setUsers } from '../utility/user';
import { PAGE_URL } from '../utility/page-url';
import { users } from '../mock-data/user-data';
import { Page, PageObject } from '../page-models/pages/factory/page';

const user = users[1];

const loginPage = PageObject(Page.LOGIN_PAGE);
const homePage = PageObject(Page.HOME_PAGE);

fixture`LoginPageTests`.page(PAGE_URL.LOGIN_PAGE).beforeEach(async (t) => {
  // Mocking users in local storage
  await setUsers(users);
  await t.navigateTo(PAGE_URL.LOGIN_PAGE);
});

test('Verify Login with valid userName and password', async (t) => {
  await loginPage.verifyLoginPage(t);
  await loginPage.fillOutLoginFormAndSubmit(t, user.username, user.password);
  await homePage.verifyHomePage(t);
});

test('Verify Error message for invalid username and invalid password', async (t) => {
  await loginPage.verifyLoginPage(t);
  await loginPage.fillOutLoginFormAndSubmit(t, user.username, 'InvalidPassword');
  await loginPage.verifyInvalidLoginErrorMessage(t);
});
