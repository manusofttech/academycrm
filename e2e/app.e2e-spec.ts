import { AcadamycrmPage } from './app.po';

describe('acadamycrm App', () => {
  let page: AcadamycrmPage;

  beforeEach(() => {
    page = new AcadamycrmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
