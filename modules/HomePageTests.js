import { PAGE_URL } from '../utility/page-url';
import { Page, PageObject } from '../page-models/pages/factory/page';
import { users, user } from '../mock-data/user-data';
import { setUsers, setLoggedInUser } from '../utility/user';

const homePage = PageObject(Page.HOME_PAGE);
const loginPage = PageObject(Page.LOGIN_PAGE);

fixture`HomePageTests`.page(PAGE_URL.HOME_PAGE).beforeEach(async (t) => {
  // Mocking users and loggedin user in local storage
  await setUsers(users);
  await setLoggedInUser(user);
  await t.navigateTo(PAGE_URL.HOME_PAGE);
});

test('Verify Delete user Functionality', async (t) => {
  await homePage.verifyHomePage(t);
  await homePage.deleteUser(t, user.firstName, user.lastName);
  await homePage.verifyDeleteUser(t, user.firstName, user.lastName);
});

test('Verify Logout Functionality', async (t) => {
  await homePage.verifyHomePage(t);
  await homePage.logout(t);
  await loginPage.verifyLoginPage(t);
});
