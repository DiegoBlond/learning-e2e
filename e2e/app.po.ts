import { browser, element, by } from 'protractor';

export class TesteAngularCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  editInputFieldWith(newText) {
      var input = element(by.css('.input-title'));
      input.clear();
      input.sendKeys(newText);
  }
}
