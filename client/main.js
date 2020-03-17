// this will configure the sign up field so it
// they only need a username
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Template.listListas.helpers({
    listas:function(){
        Meteor.subscribe("showList");
        return Listas_db.find();
    }
});

Template.listItems.helpers({
    items:function(listId){
        if (Meteor.user() && listId){
            return Items_db.find({listId:listId});
        }
    }
});

Template.listItems.events({
    'click .js-toggle-list':function(parameter){
        $($(parameter.target).data('target')).toggle()
    }
});

Template.ApplicationLayout.events({
    'click .js-nav-button':function(parameter){
        console.log(parameter)
        console.log(parameter.currentTarget)
        $($(parameter.currentTarget).data('target')).toggle()
    }
});