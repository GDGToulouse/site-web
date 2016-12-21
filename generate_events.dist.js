var _meetup = require('meetup-api')({
    key: 'YOURKEY'
});

_meetup.getEvents({
	group_urlname: 'GDG-Toulouse',
	status: "upcoming,past"
}, function (err, results) {
    if (!results) return;
    results.results.map(function(event) {
        event.time = new Date(event.time).toISOString();
        return event;
    });
    console.log(JSON.stringify(results.results));
});