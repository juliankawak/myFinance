Listas_db.allow({
	update:function(userId, doc){
		if (Meteor.user()){
			return true;
		} else {
			return false;
		}
	},
	insert:function(userId, doc){
		if (Meteor.user()){
			if (userId != doc.createdBy){
				return false;
			}
			else {
				return true;
			}
		}
		else {
			return false;
		}
	},
	remove:function(userId, doc){
		return true;
	}
});


Items_db.allow({
	update:function(userId, doc){
		if (Meteor.user()){
			return true;
		} else {
			return false;
		}
	},
	insert:function(userId, doc){
		if (Meteor.user()){
			if (userId != doc.createdBy){
				return false;
			}
			else {
				return true;
			}
		}
		else {
			return false;
		}
	},
	remove:function(userId, doc){
		return true;
	}
})