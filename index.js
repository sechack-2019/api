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

/*
app.get('/', (request, response) => {
    request.send('<h1>hoge</h1>');
});
*/

app.get('/api/v1/get', (request, response) => {
	response.json({hoge: 'fuga'});
});

app.post('/api/v1/post', (request, response) => {
	const text = request.body.text || 'No Text';
	const uuid = uuidv4();
	const path = `./test/${uuid}.txt`;

    console.log('uuid:', uuid, 'text', text, '\n');

	// fs.writeFileSync(path, text);
	// const result = execSync(`npm run -s lint ${path}`).toString();
	// console.log('\n\nresult:' result);

    response.json({text: text.split('').reverse().join('')});
    // response.json({text});
	// fs.unlink(path);
});

app.post('/api/v1/isSafeName', (request, response) => {
    if (request.body === undefined) {
        response.json({});
        return null;
    }

    const text = request.body.text;
    const uuid = uuidv4();

    let isSafe = true;
    const configJson = JSON.parse(config);

    Object.keys(configJson.unusable).map(key => {
        if (!isSafe) {
            return null;
        }

        const regexp = new RegExp(configJson(key), g);
        if (text.match(regexp) !== null) {
            isSafe = false;
        }
    });

    response.json({isSafe});
});

/*
app.post('/api/v1/isSafeDescription', (request, response) => {
    // textlintwoつかって文章校正
    const lintBinary = execSync('textlint');
    const lintString = lintBinary.toString();

    // errorsなどをもつオブジェクトを返す
    const lintObject = JSON.parse(lintString);
    const errors = lintObject.error || lintObject.errors;

    if (erros) {
        response.json({isSafe: false});
    }
});
*/


const config = fs.readFileSync('config.json', 'utf-8');

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

