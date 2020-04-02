Meteor.publish("showList", function(){
    if (this.userId){
        return Listas_db.find({});
    }
});

Meteor.publish("items.filtered", function(listId){
    if (this.userId){
        return Items_db.find({ listId: listId });
    }
});

Meteor.publish("items.filtered.id", function(id){
    if (this.userId){
        return Items_db.find({ _id: id });
    }
});

