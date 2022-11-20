import { getGreeting } from '../support/app.po';

describe('shell', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Hello');
  });
});
