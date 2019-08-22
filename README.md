# example

コピペで動く

## 商品名の判定

```js
fetch('https://salutem-api.herokuapp.com/api/v1/post', {
	method: 'POST',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		text: 'かわいいねこ'　// ここに対象の文字列
	})
})
.then(res => res.json())
.then(res => console.log(res));
```

### 戻り値

```js
{result: {id: 0}}
```

0 ... 怪しくない
1 ... 怪しい

## 説明文やレビューの判定

```js
fetch('https://salutem-api.herokuapp.com/api/v1/lint', {
	method: 'POST',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		text: '今日わいい天気です\n' // ここに対象の文字列
	})
})
.then(res => res.json())
.then(res => console.log(res));
```

### 戻り値

result(オブジェクト)
エラーの内容などtextlintの値をそのまま返す

