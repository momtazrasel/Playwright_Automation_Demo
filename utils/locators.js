// utils/locators.js

module.exports = {
    //Locators using xpath
    LoginPage: {
      login: "//a[normalize-space()='Login']",
      userEmailInput: "(//input[@id='user-name'])[1]",
      passwordInput: "(//input[@id='password'])[1]",
      loginButton: "(//input[@id='login-button'])[1]"
    },

    regs:  {
      regBook: "//img[@alt='menubook']",
      cfr_button: '//*[@id="headlessui-menu-button-:r1:"]/h2',
      part_40: "//p[contains(text(),'Part 40—Procedures for Transportation Workplace Dr')]",
      subpart_A: '//p[text()="Subpart A—Administrative Provisions"]',
      regulation_cover_40_1: '//p[text()="§ 40.1 Who does this regulation cover?"]'
    }
  };