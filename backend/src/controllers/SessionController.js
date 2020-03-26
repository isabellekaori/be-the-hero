const conection = require('../database/conection');

/*Sessions pq a ong vai estar criando uma sessão
*pego o id e checo s é igual ao do banco de dados
*se ss, retorno os dados da ong*/ 

    module.exports = {
        async create(request,response){
            const {id} = request.body;

            const ong = await conection('ongs')
                .where('id',id)
                .select('name')
                .first();

            if (!ong){
                return response.status(400).json({error: "No ONG found with this ID"});  
            }
            
            return response.json(ong);
        }
    }