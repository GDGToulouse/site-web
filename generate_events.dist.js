var _meetup = require('meetup-api')({
    key: 'YOURKEY'
});

_meetup.getEvents({
	group_urlname: 'GDG-Toulouse',
	status: "upcoming,past"
}, function (err, results) {
    console.log(JSON.stringify(results.results));
});