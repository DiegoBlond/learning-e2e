import { TesteAngularCliPage } from './app.po';

describe('teste-angular-cli App', function() {
  let page: TesteAngularCliPage;

  beforeEach(() => {
      page = new TesteAngularCliPage();
      page.navigateTo();
  });

  it('should display message saying app works', () => {
    expect(page.getParagraphText()).toEqual('app works!');
  });

  it('should change title when I edit the input field', () => {
      page.editInputFieldWith('new text');
      expect(page.getParagraphText()).toEqual('new text');
  });

  it('should give error message when we dont inform any number', () => {
    page.clickButton();
    expect(page.getResultText()).toEqual('não deu');
  });

  it('should give right result of a division', () => {
    page.editFirstNumber('10');
    page.editSecondNumber('5');
    page.clickButton();
    expect(page.getResultText()).toEqual('2');
  });

  it('should not write anything on the first input when the user tries to write letters', () => {
    page.editFirstNumber('abc');
    expect(page.getFirstInputValue()).toEqual('');
  });

  it('should not write anything on the second input when the user tries to write letters', () => {
    page.editSecondNumber('dfg');
    expect(page.getSecondInputValue()).toEqual('');
  });

});
