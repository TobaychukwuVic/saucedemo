describe('Sauce Demo Sort Test', () => {

  it('Login and verify default sorting by Name (A -> Z)', () => {
    // Login to the site
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Verify default sorting by Name (A -> Z)
    cy.get('.inventory_item_name').then(items => {
      let itemNames = [...items].map(item => item.innerText);
      let sortedNames = [...itemNames].sort((a, b) => a.localeCompare(b));
      expect(itemNames).to.deep.equal(sortedNames);

        //Change the sorting to Name (Z -> A)
          cy.get('.product_sort_container').select('Name (Z to A)');

          //Verify sorting by Name (Z -> A)
          cy.get('.inventory_item_name').then(items => {
            let itemNames = [...items].map(item => item.innerText);
            let sortedNames = [...itemNames].sort((a, b) => b.localeCompare(a));
            expect(itemNames).to.deep.equal(sortedNames);
          });
        });
    });
  });


