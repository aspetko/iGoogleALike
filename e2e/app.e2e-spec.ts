import { Clingonrc5Page } from './app.po';

describe('clingonrc5 App', function() {
  let page: Clingonrc5Page;

  beforeEach(() => {
    page = new Clingonrc5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
