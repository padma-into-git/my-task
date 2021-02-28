import { Selector } from 'testcafe';
import { waitForVisibleAndClick } from '../../utility/test-utility';
import XPathSelector from '../../utility/xpath-selector';

export default class HomePage {
  constructor() {
    this.homePageHeader = Selector('h3');
    this.logoutButton = XPathSelector('//a[contains(text(),  "Logout")]');
  }

  async verifyHomePage(t) {
    await t.expect(this.homePageHeader.innerText).eql('All registered users:');
  }

  selectUserDeleteByName(firstName, lastName) {
    return XPathSelector(`//li[contains(text(), '${firstName + ' ' + lastName}')]//span//a`);
  }

  selectUserByName(firstName, lastName) {
    return XPathSelector(`//li[contains(text(), '${firstName + ' ' + lastName}')]`);
  }

  selectUserByIndex(index) {
    return Selector(`.container ul li:nth-child(${index}) span a`);
  }

  async deleteUser(t, firstName, lastName) {
    await t.expect(this.selectUserByName(firstName, lastName).visible).ok();
    await t.click(this.selectUserDeleteByName(firstName, lastName));
  }

  async verifyDeleteUser(t, firstName, lastName) {
    await t.expect(this.selectUserByName(firstName, lastName).visible).notOk();
  }

  async logout(t) {
    await waitForVisibleAndClick(t, this.logoutButton);
  }
}
