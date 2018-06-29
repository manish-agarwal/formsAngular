import { FormsAngularPage } from './app.po';

describe('forms-angular App', function() {
  let page: FormsAngularPage;

  beforeEach(() => {
    page = new FormsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
