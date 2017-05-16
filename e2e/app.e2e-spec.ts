import { TrafficLightSimPage } from './app.po';

describe('traffic-light-sim App', () => {
  let page: TrafficLightSimPage;

  beforeEach(() => {
    page = new TrafficLightSimPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
