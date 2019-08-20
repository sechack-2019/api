const execSync = require('child_process').execSync;
const bodyParser = require('body-parser');
const express = require('express');
const uuidv4 = require('uuid/v4');
const fs = require('fs');
const app = express();

// app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/api/v1/get', (request, response) => {
	response.json({hoge: 'fuga'});
});

app.post('/api/v1/post', (request, response) => {
    // const data = request.body;
    // const text = data.text;

	const text = request.body.text || 'No Text';
	const uuid = uuidv4();
	const path = `./test/${uuid}.txt`;

	// fs.writeFileSync(path, text);
	// const result = execSync(`npm run -s lint ${path}`).toString();
	// console.log('\n\nresult:' result);

    response.json({text: text.split('').reverse().join('')});
    // response.json({text});
	// fs.unlink(path);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

// usage
/*

fetch('https://salutem-api.herokuapp.com/api/v1/post', {
	method: 'POST',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		text: 'hoge'
	})
}).then(res => res.json()).then(res => console.log(res));

*/