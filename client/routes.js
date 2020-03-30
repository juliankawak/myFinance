Meteor.subscribe("showList");

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

// the main route. showing the list of sites.
Router.route('/', function () {
    this.render('principalList');
});


Router.route('/list/:_id', function () {
    var listId = this.params._id;   
    
    Meteor.subscribe("items.filtered", listId);

    list = Listas_db.findOne({_id:listId});
    this.render('listItems', {data:list});
});

Router.route('/list/:_id/edit', function () {
    var listId = this.params._id;   

    Meteor.subscribe('showList');
    
    listas = Listas_db.findOne({_id:listId});
    this.render('ListFormEdit', {data:listas});
});


Router.route('/stadistics', function () {
    this.render('stadistics');
});

