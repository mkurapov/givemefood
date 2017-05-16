import { GivemefoodPage } from './app.po';

describe('givemefood App', () => {
  let page: GivemefoodPage;

  beforeEach(() => {
    page = new GivemefoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
