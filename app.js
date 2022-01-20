const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo( argv.base, argv.li, argv.l )
    .then( nombreArchivo => console.log( nombreArchivo, 'creado' ) )
    .catch( err => console.log( err ) )








//let limite = 15;
//let base = 9;


