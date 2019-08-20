const express = require('express');
const uuidv4 = require('uuid/v4');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/post', (req, res) => {
	const text = req.body === undefined ? 'undefined' : req.body.text;
	const uuid = uuidv4();

	console.log('\npost:', text, '\nuuid:', uuid);
	
	const data = {text, flag: true};

	res.json(data);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));