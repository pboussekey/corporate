import { Corpowebsite2Page } from './app.po';

describe('corpowebsite2 App', function() {
  let page: Corpowebsite2Page;

  beforeEach(() => {
    page = new Corpowebsite2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
