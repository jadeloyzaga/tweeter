var setup = function () {
	window.App = {
		Models: {},
		Collections: {},
		Views: {}
	};

	// window.template

	//GET the user's timeline
	App.Models.Timeline = Backbone.Model.extend();
	App.Collections.TimelineCollection = Backbone.Collection.extend({
		model: 	App.Models.Timeline, 
				url: "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2",
				parse: function(response) {
	            	return response.results;
	        	}

	});
};

setup();

var t = new App.Collections.TimelineCollection();
t.fetch();