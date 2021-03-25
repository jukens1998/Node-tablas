const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la Base a multiplicar'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe:'Lista los elementos multiplicados por la base asignada'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe:'Ultimo número por el cual se multiplicara la base'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;