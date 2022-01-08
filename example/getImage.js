const Klapciate = require('../main.js');
const API = new Klapciate();

API.getImage().then((url) => {
    console.log(url);
});
