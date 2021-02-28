import { Selector } from 'testcafe';
import { typeText, waitForVisibleAndClick } from '../../utility/test-utility';

export default class LoginPage {
  constructor() {
    this.loginHeader = Selector('h2');
    this.userNameInput = Selector('input[name="username"]');
    this.passwordInput = Selector('input[name="password"]');
    this.loginButton = Selector('.btn.btn-primary');
    this.registerButton = Selector('.btn.btn-link');
    this.incorrectCredentialsMessage = Selector('div.alert.alert-danger');
    this.successfulRegistrationMessage = Selector('div.alert.alert-success');
  }

  async verifyLoginPage(t) {
    return t.expect(this.loginHeader.visible).ok('', { timeout: 2000 });
  }

  async verifyInvalidLoginErrorMessage(t) {
    await t.expect(this.incorrectCredentialsMessage.innerText).eql('Username or password is incorrect');
  }

  async fillOutLoginFormAndSubmit(t, userName, password) {
    await typeText(t, this.userNameInput, userName);
    await typeText(t, this.passwordInput, password);
    await waitForVisibleAndClick(t, this.loginButton);
  }

  async clickOnTheRegisterButton(t) {
    await waitForVisibleAndClick(t, this.registerButton);
  }
}
