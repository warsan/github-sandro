import { Ng2RealApp } from './app.po';

describe('ng-demo App', () => {
  let page: Ng2RealApp;

  beforeEach(() => {
    page = new Ng2RealApp();
  });

  it('должно появиться сообщение о том, что приложение работает', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('conduit');
  });
});
// should display message saying app works