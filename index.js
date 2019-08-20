const express = require('express');
const uuidv4 = require('uuid/v4');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/get', (req, res) => {
	const text = 'test'; //req.body ? '' : req.body.text;
	const uuid = uuidv4();

	console.log('\npost:', text, '\nuuid:', uuid);
	
	const data = [
		{title: 'hoge', done: true}
	];

	res.json(data);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));