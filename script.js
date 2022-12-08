//constante de axios que usa el protocolo de http para traer datos
const axios = require('axios').default;

//Api que conecta con dog facts
/*
axios.get('https://dog-api.kinduff.com/api/facts')
    //resp contiene toda la meta informacion que se recibe de la url
    .then(function (resp) {
        console.log(resp.data.facts);
    })
    .catch(function (err) {
        console.log(err);
    });
*/

const random = Math.floor(Math.random() * 826)
axios.get(`https://rickandmortyapi.com/api/character/${random}`)
    .then(function (resp) {
        console.log(resp);
    })
    .catch(function (err) {
        console.log(err);
    });