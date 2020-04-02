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
        if (!Meteor.user()){
            return;
        }
        else {
            list.createdBy = Meteor.user().username;
            list.createdOn  = new Date();
            return Listas_db.update(list);
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
            return Items_db.update(item);
        }    
    }
})

Meteor.methods({
    'removeMessage':function(id){
        if (!Meteor.user()){
            return;
        }
        else {
            var msg = Messages.findOne({_id:id});
            if (msg.nickname == Meteor.user().username){
                    Messages.remove({_id:id});
                    return true;
            }
        }
    }
})
