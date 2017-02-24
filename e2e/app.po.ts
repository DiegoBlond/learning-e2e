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

  clickButton() {
    var button = element(by.css('button'));
    button.click();
  }

  editFirstNumber(newNumber1) {
    var firstNumberInput = element(by.css('.qa-first-field'));
    firstNumberInput.clear();
    firstNumberInput.sendKeys(newNumber1);
  }

  editSecondNumber(newNumber2 ){
    var secondNumberInput = element(by.css('.qa-second-field'));
    secondNumberInput.clear();
    secondNumberInput.sendKeys(newNumber2);
  }

  getResultText() {
    return element(by.css('.qa-result')).getText();
  }

  getFirstInputValue() {
    return element(by.css('.qa-first-field')).getAttribute('value');
  }

  getSecondInputValue() {
    return element(by.css('.qa-second-field')).getAttribute('value');
  }
}
