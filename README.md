# Teste
 - O desafio é criar o backend para um sistema de gerenciamento de uma locadora de carro.


## Requisitos:
 - Desenvolver uma API RESTful que implemente as operações CRUD (Create, Read, Update, Delete).
 - A API deve ser integrada com um banco de dados relacional ou não, caso selecione relacional use a plataforma da Neon ou Vercel para criação de sua instância gratuita.
 - Escolha uma plataforma de hospedagem para a sua aplicação, como Neon, Vercel ou outra de sua preferência e execute o deploy
 - A API deve ser desenvolvida usando uma dessas linguagens de programação Python, Java, Node.js ou TypeScript.

## Escopo:
 - A API deve suportar as seguintes operações CRUD:

[POST] /carros :Criar um carro, deve permitir que um usuário crie um novo carro, fornecendo as informações básicas, como modelo, marca, descrição, preço de aluguel e categoria.

[POST] /carros/alugar : Alugar um carro, deve permitir que um usuário alugue um carro, fornecendo o ID do carro, a data e hora de início do aluguel e a data e hora de fim do aluguel.

[GET] /carros : Listar todos os carros sob propriedade da empresa, deve permitir que um usuário liste todos os carros.

[GET] /carros/{id} : Listar carro, apenas um carro específico, fornecendo o ID do carro.

[PUT] /carros/{id} : Atualizar um carro, deve permitir que um usuário atualize as informações de um carro existente, fornecendo o ID do carro e as informações a serem atualizadas.

[DELETE] /carros/{id}: Excluir um carro da tabela de carros, deve permitir que um usuário exclua um carro existente, fornecendo o ID do carro.

[GET] /carros/disponiveis : Listar carros disponíveis para locação, essa operação deve retornar uma lista de todos os carros que estão disponíveis para aluguel.

[GET] /carros/alugados :Listar carros alugados, essa operação deve retornar uma lista de todos os carros que estão alugados.


## Critérios de avaliação:
 - A API deve estar completa e funcionando de acordo com os requisitos.
 - A API deve ser bem estruturada e organizada.
 - A API deve ser testável, para facilitar o desenvolvimento e testes da API, utilize umas das ferramentas Postman ou Insomnia para realizar as requisições HTTP.

## Dicas :
 - Comece pelo básico e implemente as operações CRUD básicas primeiro.
 - Use uma ferramenta de banco de dados para criar o esquema do banco de dados.
 - Faça um boa documentação da api, utilizando swagger.
 - Escolha um ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados. Você pode utilizar SQLAlchemy para Python, Sequelize para Node.js, ou Mongoose para MongoDB, ou qualquer outro que lhe auxilie.
