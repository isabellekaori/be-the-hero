const conection = require('../database/conection');

module.exports = {
    
    async index(request,response){
        const {page = 1} = request.query; //cpaginando 

        const [count] = await conection('incidents').count(); //contando a quantidade total de casos registrados

        console.log(count);

        const incidents = await conection('incidents') //limitar quantidade de casos por vez (no caso, 5)
        
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //juntando as tabelas onde o id da ong seja o mesmo do da tabela incidents
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.UF'
    ]);
        
        response.header('X-total-Count', count['count(*)']);

        return response.json(incidents);
    },
    
    async create (request,response){

        const {title, descriptions, value} = request.body;

        const ong_id = request.headers.authorization; //autenticação do usuário, autenticação, nn vai para o body

        const {id} = await conection ('incidents').insert({
            title,
            descriptions,
            value,
            ong_id,
        });

        return response.json({id});
    },

    async delete(request,response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incident = await conection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if(incident.ong_id !== ong_id){
            return response.status(401).json({error: 'Operation not permitted.'});
        }
        await conection('incidents').where('id',id).delete();

        return response.status(204).send();
    }

};
