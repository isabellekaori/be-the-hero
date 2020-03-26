//método up == oq eu quero criar/seja feito
exports.up = function(knex) {
return knex.schema.createTable('ongs',function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('UF',2).notNullable();
  });
};
//oq quero apagar/consertar ou deu errado
return exports.down = function(knex) {
  
};
