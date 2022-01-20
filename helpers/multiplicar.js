const fs = require('fs');
const colors = require('colors/safe');

// const crearArchivo = ( base, limite ) => {
//     console.log('============');
//     console.log('   Tabla del:', base);
//     console.log('============'); 

//     let salida = '';

//     for (let i = 0; i < limite; i++) {
//         salida += `${ base } x ${ i } = ${ base * i}\n`;
//     }

//     console.log( salida );

//     const fileName = `tabla-${ base }.txt`;

//     return new Promise( ( resolve, reject ) => {

//         fs.writeFile( fileName, salida, ( err ) => {
//             ( err )
//                 ? reject( err )
//                 : resolve( fileName );

//         });

//     } )


// };

const crearArchivo = async ( base, limite, listar ) => {

    try {

        
        let salida = '';
        
        for (let i = 0; i < limite; i++) {
            salida += `${ base } x ${ i } = ${ base * i}\n`;
        }
        
        if (listar) {
            console.log( colors.green('============'));
            console.log( colors.green(`Tabla del: ${base}`));
            console.log( colors.green('============'));
            console.log( salida );
        }
    
    
        const fileName = `tabla-${ base }.txt`;
    
        fs.writeFileSync( `./salida/${fileName}`, salida );
    
        return fileName;
        
    } catch (err) {
        throw err
    }



};

module.exports = { crearArchivo };


