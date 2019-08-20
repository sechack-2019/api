const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');
// const cors = require('cors');
const app = express();

// app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/v1/check-text', (request, response) => {
	if (request.body === undefined) {
		response.json(false);
	}

	const text = request.body === undefined ? 'undefined' : request.body.text;

	// const uuid = uuidv4();
	// console.log('\npost:', text, '\nuuid:', uuid);
	// console.log('text', text);
	
	/*
	const flag = false;

	const data = [
		{ uuid, text },
		{ uuid, flag }
	];
	*/

	response.json(true);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));