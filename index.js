const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');
const cors = require('cors');
const app = express();

app.use(cors());
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
    const todoData = request.body;
    const todoTitle = todoData.title;

    const id = uuidv4();
    const todoItem = {
        id,
        title: todoTitle,
        done: false
    };

    console.log('Add: ' + JSON.stringify(todoItem));
    response.json(todoItem);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));