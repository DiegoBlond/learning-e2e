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
      page.editInputFieldWith("new text");
      expect(page.getParagraphText()).toEqual('new text');
  });
});
