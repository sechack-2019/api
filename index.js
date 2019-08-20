const express = require('express');
const uuidv4 = require('uuid/v4');
const app = express();

app.get('/api/get', (req, res) => {
	const text = req.body.text;
	const uuid = uuidv4();
	
	console.log('\npost:', text, '\nuuid:', uuid);
	res.json([]);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));