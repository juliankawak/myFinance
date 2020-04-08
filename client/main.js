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

Template.ListFormEdit.helpers({
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
        $($(parameter.currentTarget).data('target')).toggle()
    }
});

Template.listListas.events({
    'click .js-delete-lista': function(event){
        var id = this._id;
        Listas_db.remove({"_id":id});
    }
});


var chart; //Pie
var chart2; //Bars

Template.stadistics.rendered = function(dasuper) {

    var lista = this.data.list;
    var data = this.data.items;

    //Pie
    var container = this.find("#container");
    
    var datos = [];
    if(data.length > 0){
        for (x in data) {        
            datos.push({x: data[x]['name'], value: data[x]['amount'] })
        }
    }
    //  ----- Standard Anychart API in use -----
    chart = anychart.pie(datos);
    chart.title(lista.name);

    chart.legend()
      .position('bottom')
      .itemsLayout('horizontal')
      .align('center')
      .title('Overview List');

    chart.animation(true);
    chart.container(container).draw();    


    //Bar
    var containerBar = this.find("#containerBar");
    
    var datosB = [];
    if(data.length > 0){
        for (x in data) {        
            datosB.push([data[x]['name'], data[x]['amount']]);
        }
    }
    //  ----- Standard Anychart API in use -----
    chart = anychart.column(datosB);
    chart.title(lista.name);

    chart.legend()
      .position('bottom')
      .itemsLayout('horizontal')
      .align('center')
      .title('Overview List');

    chart.animation(true);
    chart.container(containerBar).draw();    



};
