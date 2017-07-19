import { KartProdPage } from './app.po';

describe('kart-prod App', () => {
  let page: KartProdPage;

  beforeEach(() => {
    page = new KartProdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to $!');
  });
});
