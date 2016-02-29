var restify = require('restify');
var btoa = require('btoa');

//Super secret stufff
var consumerKey = "xxxx";
// TODO: this shouldn't be in here...
var consumerSecret = "xxxx";

var token = btoa(consumerKey.concat(":", consumerSecret));
var basic = "Basic ".concat(token);
var accessToken;

var server = restify.createServer();
var client = restify.createStringClient('https://api.twitter.com');
var clientOptions = {
    path: '/oauth2/token',
    headers: {
        'Authorization': 'Basic ' + token,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
};

client.post(clientOptions, {"grant_type": "client_credentials"}, function(err, req, res){
    // console.log("err: " + err);
    // console.log("req: " + req);
    // console.log("res: " + res);
    // console.log("res.body token: " + res.body);
    // finally got that to work!

    var jsonBody = JSON.parse(res.body);
    accessToken = jsonBody.access_token;
});

server.get('/user_timeline', function (req, res, next) {
    res.send([
        'tweet1',
        'tweet2'
    ]);
    next();
});

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});