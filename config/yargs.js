const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('li', {
                alias: 'limite',
                type: 'number',
                demandOption: true,
                describe: 'Es el limite de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                describe: 'Permite imprimir la tabla de multiplicar',
                default: false
            })
            .check( (argv, options) => {
                if ( isNaN( argv.b ) ) {
                    throw 'La base tiene que ser un número'
                }

                if ( isNaN( argv.li ) ) {
                    throw 'El limite tiene que ser un número'
                }
                return true;
            })
            .argv;

module.exports = argv;

