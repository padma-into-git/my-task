import { Selector } from 'testcafe';
import { typeText, waitForVisibleAndClick } from '../../utility/test-utility';

export default class RegistrationPage {
  constructor() {
    this.usernameInput = Selector('input[name="username"]');
    this.passwordInput = Selector('input[name="password"]');
    this.firstNameInput = Selector('input[name="firstName"]');
    this.lastNameInput = Selector('input[name="lastName"]');

    this.registerButton = Selector('.btn.btn-primary');
    this.cancelButton = Selector('.btn.btn-link');

    this.registrationHeader = Selector('h2');
  }

  async verifyRegistrationPage(t) {
    return t.expect(this.registrationHeader.visible).ok({ timeout: 500 });
  }

  async fillingOutTheRegistrationForm(t, userName, password, firstName, lastName) {
    await typeText(t, this.firstNameInput, firstName);
    await typeText(t, this.lastNameInput, lastName);
    await typeText(t, this.usernameInput, userName);
    await typeText(t, this.passwordInput, password);
  }

  async clickOnTheCancelButton(t) {
    await waitForVisibleAndClick(t, this.cancelButton);
  }

  async clickOnTheRegisterButton(t) {
    await waitForVisibleAndClick(t, this.registerButton);
  }
}
