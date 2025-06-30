describe('Users API', () => {
    const API = 'http://localhost:8000/v1/users';

    it('should return all users', () => {
        cy.request('GET', API).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
        });
    });
});
