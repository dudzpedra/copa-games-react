describe("copa games app", () => {
  it("home page is loaded", () => {
    cy.visit("http://localhost:3000");
    cy.contains("About");
    cy.contains("Contact");
    cy.contains("Boas vindas a");
    cy.contains(
      "A Lambda3 está organizando uma Copa do Mundo de games, e precisamos de sua ajuda para determinar quais gamesestarão no pódio e quem é o grande campeão. O resultado de cada partida é determinado de acordo com a nota do público para cada um dos games."
    );
    cy.contains("START");
    cy.contains("dudzpedra");
    cy.contains("Flaticon");
  });
  it('games route is loaded', () => {
      cy.visit('http://localhost:3000/games')
      cy.contains('Voltar para o Início')
      cy.contains('Select the amount of games')
      cy.contains('Select games')
      cy.contains('selected')
  })
});
