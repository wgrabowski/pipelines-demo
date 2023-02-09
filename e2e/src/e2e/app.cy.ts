import { getCalculator } from '../support/app.po';

describe('pipelines-demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display app name ', () => {

    getCalculator().contains('Giga Sumator');
  });
});
