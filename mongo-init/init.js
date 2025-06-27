db = db.getSiblingDB('albarea');

db.users.insertMany([
    {
        name: "Ned Stark",
        email: "sean_bean@gameofthron.es",
        password: "blabla"
    },
    {
        name: "Arya Stark",
        email: "arya@winterfell.com",
        password: "sword123"
    }
]);
