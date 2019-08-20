const express = require('express');
const uuidv4 = require('uuid/v4');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/v1/check-text', (req, res) => {
	const text = req.body === undefined ? 'undefined' : req.body.text;
	const uuid = uuidv4();

	// console.log('\npost:', text, '\nuuid:', uuid);
	// console.log('text', text);
	
	const flag = false;

	const data = [
		{ uuid, text },
		{ uuid, flag }
	];

	res.json(data);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));