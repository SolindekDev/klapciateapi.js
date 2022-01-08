const Klapciate = require('../main.js');
const API = new Klapciate();

API.getGif().then((url) => {
    console.log(url);
});