Meteor.methods({
    'insertList': function(list){
        if (!Meteor.user()){
            return;
        }
        else {
            list.createdBy = Meteor.user().username;
            list.createdOn  = new Date();
            return Listas_db.insert(list);
        }    
    },
    'updateList': function(list){
        console.log(list)
        if (!Meteor.user()){
            return;
        }
        else {
            list.createdBy = Meteor.user().username;
            list.createdOn  = new Date();
            return Listas_db.update({ _id:list._id }, list);
        }    
    },
    'insertItem': function (item) {
        if (!Meteor.user()){
            return;
        }
        else {
            item.createdBy = Meteor.user().username;
            item.createdOn  = new Date();
            return Items_db.insert(item);
        }    
    },
    'updateItem': function(item){
        if (!Meteor.user()){
            return;
        }
        else {
            item.createdBy = Meteor.user().username;
            item.createdOn  = new Date();
            return Items_db.update({ _id: item._id }, item);
        }    
    },
    'deleteList': function(id){
        return Listas_db.remove({"_id":id});
    },
    'deleteItem': function(id){
        return Items_db.remove({"_id":id});
    }
});