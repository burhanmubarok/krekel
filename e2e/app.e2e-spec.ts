import { KrekelPage } from './app.po';

describe('krekel App', () => {
  let page: KrekelPage;

  beforeEach(() => {
    page = new KrekelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
