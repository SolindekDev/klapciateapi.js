[![https://img.shields.io/github/package-json/v/solindekdev/klapciateapi.js?color=fd3](https://img.shields.io/github/package-json/v/solindekdev/klapciateapi.js?color=fd3)](https://www.npmjs.com/package/klapciateapi.js)
# KlapciateAPI.JS
Jest to biblioteka która ułatwia używanie [KłapciategoAPI](http://klapciate-api.herokuapp.com/)
# Jak pobrać
Aby pobrać naszą bibliotekę użyjemy npm więc wpisz w cmd 
```bash
npm i klapciateapi.js
```
# Jak używać?
`getText` - Funkcja zwraca teksty kłapoucha
```js
const Klapciate = require('../main.js');
const API = new Klapciate();

API.getText().then((text) => {
    console.log(text);
});
```
`getImage` - Funkcja zwraca URL zdjęcia z kłapouchem
```js
const Klapciate = require('../main.js');
const API = new Klapciate();

API.getImage().then((url) => {
    console.log(url);
});
```
`getGif` - Funkcja zwraca URL gif'a z kłapouchem
```js
const Klapciate = require('../main.js');
const API = new Klapciate();

API.getGif().then((url) => {
    console.log(url);
});
```
