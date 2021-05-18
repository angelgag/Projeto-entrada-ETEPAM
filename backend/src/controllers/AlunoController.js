const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async create (request, response) {
        const {matricula, cpf, nome, turma, serie, dataNascimento} = request.body;
        
        await connection('Alunos').insert({
            matricula,
            nome,
            cpf,
            turma,
            serie,
            dataNascimento
        });
    
        return response.json({matricula});
    },
    async list (request, response) {
        const {page = 1} = request.query;

        const [count] = await connection('Alunos').count();

        const alunos = await connection('Alunos')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*');

        response.header('X-Total-Count', count['count(*)']);
    
        return response.json(alunos);
    }
}