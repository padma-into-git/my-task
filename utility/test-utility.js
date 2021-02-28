export const waitForVisible = async (t, selector, timeout = 500) => {
  await t.expect(selector.visible).ok('', { timeout });
};

export const waitForVisibleAndClick = async (t, selector, timeout = 500) => {
  await waitForVisible(t, selector, timeout);
  await t.click(selector);
};

export const typeText = async (t, selector, value) => {
  await waitForVisible(t, selector, 1000);
  await t
    .setTestSpeed(0.7)
    .hover(selector)
    .expect(selector.hasAttribute('disabled'))
    .notOk({ timeout: 2000 })
    .click(selector)
    .typeText(selector, value, { replace: true });
};
