describe('Posts API', () => {
    const endpoint = '/posts';

    it('should return all posts', () => {
        cy.request('GET', endpoint).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
        });
    });

    it('should create a new post', () => {
        const post = {
            title: 'Post E2E',
            content: 'Test de Cypress',
            author: 'Testeur',
            date: new Date().toISOString()
        };

        cy.request('POST', endpoint, post).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.include(post);
        });
    });
});
