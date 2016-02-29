// asks backend to make a request for timeline










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
				url: "http://localhost:8080/user_timeline",
				parse: function(response) {
	            	return response.results;
	        	}

	});
};

// // cheated and just did it in jQuery
// $.ajax({

// 	type: 'POST',
// 	url: "https://api.twitter.com/oauth2/token",
// 	beforeSend: function(request) {
// 		console.log("Hello? It's me");
// 		request.setRequestHeader("Authorization", "Basic " + encodedToken);
//         request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
//     },
//     data: 'grant_type=client_credential',
//     dataType: 'jsonp',
//     processData:false,
//     success: function (msg) {
//         callback(msg);
//     }, error: function(msg) {
//         console.log(msg);
//     }
// });


setup();

var t = new App.Collections.TimelineCollection();
t.fetch({
	dataType:'jsonp'
});
