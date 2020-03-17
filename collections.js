Listas_db = new Mongo.Collection("listas");
Items_db = new Mongo.Collection("items");

Listas_db.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    description: {
        type: String,
        label: "Description",
        max: 1000
    },
    createdBy: {
        type: String,
        autoform: {
            type: "hidden",
            label: false
        },
        defaultValue: 'anon'
    },
    createdOn: {
        type: Date,
        autoform: {
            type: "hidden",
            label: false
        },
        defaultValue: new Date(),
    },
}));

Items_db.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200
    },
    amount: {
        type: Number,
        label: "Amount",
        min: 0
    },
    registerOn: {
        type: Date,
        label: "registerOn"
    },
    createdOn: {
        type: Date,
        autoform: {
            type: "hidden",
            label: false
        },
        defaultValue: new Date(),
    },
    createdBy: {
        type: String,
        autoform: {
            type: "hidden",
            label: false
        },
        defaultValue: 'anon'
    },
    listId: {
        type: String,
        autoform: {
            type: "hidden",
            label: false
        },
        defaultValue: '0'
    },

}));