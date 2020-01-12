// const fs = require('fs');

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar.'.green);
        listarTabla(argv.base, argv.limite)
            .then(resultado => console.log(resultado))
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log(`opcion crear ${argv.limite}`);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo.red}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}

// console.log(argv);