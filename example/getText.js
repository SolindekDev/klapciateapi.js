const Klapciate = require('../main.js');
const API = new Klapciate();

API.getText().then((text) => {
    console.log(text);
});


