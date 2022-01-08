Wkrótce na npm
# KlapciateAPI.JS
Jest to biblioteka która ułatwia używanie [KłapciategoAPI](http://klapciate-api.herokuapp.com/)
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
