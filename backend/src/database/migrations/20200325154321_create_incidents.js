
exports.up = function(knex) {
    return knex.schema.createTable('incidents',function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('descriptions').notNullable();
        table.decimal('value').notNullable();
    
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');//chamando a chave extrangeira id da outra tabela
    });
};

exports.down = function(knex) {
  return knoex.schema.dropTable('incidents');
};
