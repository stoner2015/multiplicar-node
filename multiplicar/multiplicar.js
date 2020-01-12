//require
const fs = require('fs');

// let base = 3;
let tabla = '';
let result = '';

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`la base ${base} es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`el Limite ${limite} es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            result += `${base} x ${i} = ${base * i}\n`;
        }
        resolve(result);

    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base ${base} es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`el Limite ${limite} es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            tabla += `${base} x ${i} = ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(tabla));
        fs.writeFile(`tablas/tabla-${base} hasta ${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base} hasta ${limite}.txt`)

        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}