[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=API-Conectaula&uri=https%3A%2F%2Fgithub.com%2FLuccaHaddadSerejo%2Fgrupo-3-json-server%2Fblob%2Fmaster%2Fapi-conectaula.json)

## Endpoints
Assim como a documentação do JSON-Server-Auth traz (https://www.npmjs.com/package/json-server-auth), existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login. Além desses, adicionamos mais 2 endpoints utilizando o JSON-Server (https://www.npmjs.com/package/json-server).
### Cadastro
POST /register <br/>
POST /signup <br/>
POST /users
Qualquer um desses 3 endpoints irá cadastrar o usuário na lista de "Users", sendo que os campos obrigatórios são os de email e password.
Você pode ficar a vontade para adicionar qualquer outra propriedade no corpo do cadastro dos usuários.
### Login
POST /login <br/>
POST /signin
Qualquer um desses 2 endpoints pode ser usado para realizar login com um dos usuários cadastrados na lista de "Users"
### Encontrar usuários por tipo de usuário
GET /users?type=tipoDeUsuário
Esse endpoint permite que, através dos query params, busquemos apenas usuários cadastrados como "teacher" ou como "student".
### Editar perfil de usuário
PATCH /users/id
Esse endpoint permite adicionar informações e realizar alterações nas informações coletadas no momento do registro.
### Excluir perfil do usuário
DELETE /users/id
Esse endpoint permite ao usuário dono do recurso apagar seu usuário da API
### Enviar mensagens
POST /messages
Esse endpoint permite salvar na API as mensagens enviadas pelo usuário do tipo "student" para um usuário do tipo "teacher". Os campos de id dos usuários já vêm preenchidos, mas é necessário enviar um título e o corpo da mensagem na requisição.
### Ler mensagens
GET /messages
GET /messages/id
Esse endpoint permite ao usuário logado ler todas as mensagens enviadas ou filtrar de acordo com id da mensagem.
### Encontrar matérias
GET /grades
Esse endpoint permite ao usuário logado acessar todas as matérias disponíveis para aula no site.
