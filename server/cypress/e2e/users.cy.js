describe('Users API', () => {
    const endpoint = '/users';

    it('should return all users', () => {
        cy.request('GET', endpoint).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
        });
    });
});
