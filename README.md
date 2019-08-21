# example

run this on console:

```js
fetch('https://salutem-api.herokuapp.com/api/v1/post', {
	method: 'POST',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		text: 'めぐみんはかわいい！'
	})
}).then(res => res.json()).then(res => console.log(res));
```

will be return:

```js
{text: "！いいわかはんみぐめ"}
```