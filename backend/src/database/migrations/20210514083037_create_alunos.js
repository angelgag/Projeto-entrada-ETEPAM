
exports.up = function(knex) {
  return knex.schema.createTable('Alunos', function(table){
      table.int('matricula').primary();
      table.string('nome').notNullable();
      table.string('cpf').notNullable();
      table.string('turma').notNullable();
      table.int('serie').notNullable();
      table.string('dataNascimento').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Alunos');
};
