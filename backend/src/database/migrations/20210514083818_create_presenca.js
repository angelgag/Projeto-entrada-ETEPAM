
exports.up = function(knex) {
  return knex.schema.createTable('Presenca', function(table){
    table.date('dataAtual').notNullable();
    table.boolean('presente').default(false);
    table.int('idAluno').notNullable();

    table.foreign('idAluno').references('matricula').inTable('Alunos');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('Presenca');
};
