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


Template.acTemplate.rendered = function() {

   
};


Template.stadistics.helpers({
    chart: function(list){

        var chart;

        var container = this.find("#container");

        // Turn Meteor Collection to simple array of objects.
        var data = Items_db.find({listId:list.listId});;

        console.log(data)

        var datos;
        if(data.length > 0){
            for (x in data) {        
                console.log(data)
                console.log(x)
            }
        }

        //  ----- Standard Anychart API in use -----
        chart = anychart.pie(data);
        chart.title('ACME Corp. apparel sales through different retail channels');

        chart.legend()
          .position('bottom')
          .itemsLayout('horizontal')
          .align('center')
          .title('Retail channels');

        chart.animation(true);
        chart.container(container).draw();    

        return chart;
    }
});