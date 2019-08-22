const TextLintEngine = require('textlint').TextLintEngine;
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
    console.log('\n\n', '-'.repeat(15));

    const text = request.body.text || 'No Text';
    let flag = false;

    config.unusable.forEach(pattern => {
        const regexp = new RegExp(pattern, 'g');
        if (text.match(regexp) !== null) flag = true;
    });

    response.json({result: {id: flag ? 1 : 0}});
});

app.post('/api/v1/lint', (request, response) => {
    console.log('\n\n', 'post:', request, '\n', '= '.repeat(10), '>', '\n\n');

    const text = request.body.text || 'No Text';
    let flag = false;

    const engine = new TextLintEngine({configFile: ".textlintrc"});
    engine.executeOnText(text).then(results => {
        console.log(results[0].messages);

        if (engine.isErrorResults(results)) {
            const output = engine.formatResults(results);
            // console.log('output', output);
        }

        response.json({result: results[0].messages});
        console.log('\n\n', '<', '= '.repeat(10));
    });
});

const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

