import { TesteFrontFujitsuPage } from './app.po';

describe('teste-front-fujitsu App', function() {
  let page: TesteFrontFujitsuPage;

  beforeEach(() => {
    page = new TesteFrontFujitsuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
