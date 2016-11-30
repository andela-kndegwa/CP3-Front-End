import { CP3FrontEndPage } from './app.po';

describe('cp3-front-end App', function() {
  let page: CP3FrontEndPage;

  beforeEach(() => {
    page = new CP3FrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
