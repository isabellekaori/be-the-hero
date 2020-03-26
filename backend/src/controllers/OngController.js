const conection = require ('../database/conection');//conexão comm o banco
const crypto = require('crypto'); //importando o crypto q já é do node q pode criar numeros aleatorios 

    module.exports = { 
        
        async index (request, response) {

            const ongs = await conection('ongs').select('*'); // pegando todas as ongs do bd e me retornando

        return response.json(ongs);
    },


        async create(request, response){
            const {name,email,whatsapp,UF} = request.body; 

                const id = crypto.randomBytes(4).toString('HEX'); // criando 4 numeros hexadecimais para cada id cadastrado

                await conection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                UF,
                })

        return response.json({id});
    }

};