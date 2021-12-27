console.log('hello!');

var JSONObj = {};

var JSONObj = new Object();

var JSONObj = { nombrelibro: 'El hacedor', precio: 500 };

const deportista = {
  nombre: 'Messi',
  champions: 4,
};

console.log(Json.stringify(deportista));

fetch ('http://127.0.0.1:5500/prueba.Json')
.then((response) => response.json())
.then ((data) => console.log(data));

