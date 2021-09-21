it('7 + 2 equals 9', () => {
    //1. arrange
    cy.visit('http://127.0.0.1:5501/index.html');
    //2. act
    cy.get('[data-cy=seven]').click()
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click();
    //3. assert

    cy.get('[data-cy=display]').should("have.text", "9")

  })

  it('7 - 2 equals 5', () => {
    //1. arrange
    cy.visit('http://127.0.0.1:5501/index.html');
    //2. act
    cy.get('[data-cy=seven]').click()
    cy.get('[data-cy=minus]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click();
    //3. assert

    cy.get('[data-cy=display]').should("have.text", "5")

  })

  it('7 * 2 equals 14', () => {
    //1. arrange
    cy.visit('http://127.0.0.1:5501/index.html');
    //2. act
    cy.get('[data-cy=seven]').click()
    cy.get('[data-cy=multiply]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click();
    //3. assert

    cy.get('[data-cy=display]').should("have.text", "14")

  })

  it('7 / 2 equals 3.5', () => {
    //1. arrange
    cy.visit('http://127.0.0.1:5501/index.html');
    //2. act
    cy.get('[data-cy=seven]').click()
    cy.get('[data-cy=divide]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click();
    //3. assert

    cy.get('[data-cy=display]').should("have.text", "3.5")

  })

  it('72 + 27 equals 99', () => {
    //1. arrange
    cy.visit('http://127.0.0.1:5501/index.html');
    //2. act
    cy.get('[data-cy=seven]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=seven]').click();
    cy.get('[data-cy=equals]').click();
    //3. assert

    cy.get('[data-cy=display]').should("have.text", "99")

  })