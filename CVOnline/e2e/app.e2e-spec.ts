import { CVOnlinePage } from './app.po';

describe('cvonline App', () => {
  let page: CVOnlinePage;

  beforeEach(() => {
    page = new CVOnlinePage();
  });

  it('should display message saying Eric Zhao e-Resume', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Eric Zhao e-Resume');
  });
});
