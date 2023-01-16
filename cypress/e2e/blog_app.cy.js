/* eslint-disable no-undef */
describe('Blog app', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:3000')
      cy.contains('DEAR VIEWERS')
      cy.contains('login')
    })

    it('user can login', function() { 
      cy.visit('http://localhost:3000')
      cy.get('[data-cy="username"]').type('mmm')
      cy.get('[data-cy="password"]').type('mmm')
      cy.get('[data-cy="login"]').click()

      cy.contains("mmm is now logged in!")
    })
  })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.visit('http://localhost:3000')
      cy.get('[data-cy="username"]').type('mmm')
      cy.get('[data-cy="password"]').type('mmm')
      cy.get('[data-cy="login"]').click()
    })

    it('a new blog can be created', function() {
      cy.contains('Add an Article').click()
      cy.get('[data-cy="author"]').type('juliusgoddard')
      cy.get('[data-cy="title"]').type('blogpost')
      cy.get('[data-cy="url"]').type('www.example.com')
      cy.contains('save').click()
      cy.contains('Blog Added!')
    })
  })