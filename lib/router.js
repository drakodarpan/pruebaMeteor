Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('posts'); }
});

var requireLogin = function(){
	if(! Meteor.user()){
		if(Meteor.logginIn()){
			this.render(this.loadingTemplate)
		} else{
			this.render('accessDenied');
		}
	} else {
		this.next();
	}
}

Router.route('/submit', {name: 'postSubmit'});
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() { return Posts.findOne(this.params._id); }
});