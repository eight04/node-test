var bbsReader = require("bbs-reader"),
	fs = require("fs");

fs.readFile("test.ans", "binary", function(err, data) {
	if (err) {
		throw err;
	}
	console.time("bbsReader");
	data = bbsReader(data).html;
	console.timeEnd("bbsReader");
});
