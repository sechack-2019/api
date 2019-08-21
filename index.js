const execSync = require('child_process').execSync;
const bodyParser = require('body-parser');
const express = require('express');
const uuidv4 = require('uuid/v4');
const fs = require('fs');
const app = express();

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
	const text = request.body.text || 'No Text';
    let flag = false;

    config.unusable.forEach(pattern => {
        const regexp = new RegExp(pattern, 'g');
        if (text.match(regexp) !== null) flag = true;
    });

    response.json({result: {id: flag ? 1 : 0}});
});

const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

