const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${5 * i}\n`;
        }

        if (listar) {
            console.log('============================='.green);
            console.log(colors.red.underline(`       Tabla del ${base}       `));
            console.log('============================='.green);
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creado`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}