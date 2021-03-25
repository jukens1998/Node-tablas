const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.base, argv.list, argv.hasta)
    .then(resp => console.log(resp))
    .catch(err => console.error(err))