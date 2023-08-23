const bancodedados = {
  idInstrutor: 3,
  instrutores: [
    {
      id: 1,
      nome: 'Arthur',
      email: 'arthur@gmail.com',
      status: true,
      idAula: 1
    },
    {
      id: 2,
      nome: 'Bruno',
      email: 'bruno@gmail.com',
      status: false,
      idAula: 1
    }
  ],
  idAulas: 2,
  aulas: [
    {
      "idAulasGeral": 1,
      "titulo": "Porasdasdtuguês",
      "descricao": "descrição daasdasd aula toda aqui",
      "idAulaDoProfessor": 1,
      "professor": {
        "id": 2,
        "nome": "Bruno",
        "email": "bruno@gmail.com",
        "status": false,
        "idAula": 2
      }
    }
  ]
}

module.exports = bancodedados