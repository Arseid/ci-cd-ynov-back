const mockingoose = require('mockingoose');
const model = require('./post');

describe('test mongoose Post model', () => {
    it('should return the doc with findById', () => {
        const _doc = {
            _id: '507f191e810c19729de860eb',
            title: 'Titre',
            content: 'Contenu du post',
            author: 'Auteur',
            date: new Date('2024-06-01T00:00:00Z').toISOString()
        };

        mockingoose(model).toReturn(_doc, 'findOne');

        return model.findById({ _id: '507f191e810c19729de860eb' }).then(doc => {
            expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
        });
    });

    it('should return the docs with find', () => {
        const _doc = [{
            _id: '507f191e810c19729de860eb',
            title: 'Titre',
            content: 'Contenu du post',
            author: 'Auteur',
            date: new Date('2024-06-01T00:00:00Z').toISOString()
        }];

        mockingoose(model).toReturn(_doc, 'find');

        return model.find({}).then(docs => {
            expect(JSON.parse(JSON.stringify(docs))).toMatchObject(_doc);
        });
    });
});