import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should work', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Home');
  });
});
