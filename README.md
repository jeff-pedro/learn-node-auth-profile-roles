# Node.js Rest API: authentication, roles and profile

> Repository used to learn about authentication, profile and roles with Node.js applied to a Rest API.

## Using

1. running postgres via docker

```shell
docker run --name postgres -e POSTGRES_HOST_AUTH_METHOD=trust -p 5432:5432 -d postgres
```

2. install dependencies

```shell
npm install
```

3. create a database

```shell
npx sequelize db:create
```

4. migrate tables to the database

```shell
npx sequelize db:migrate
```

## Tarefas

### CRUD

- Criar tabelas no banco de dados usando CLI do Sequelize para salvar todos os usuários cadastrados.

  [ x ] criar tabela de _usuarios_ com "nome", "email" e "senha"

  ```shell
  npx sequelize model:create --name usuarios --attributes nome:string,email:string,senha:string
  ```

- Usar hash uuid para aumentar a segurança dos registro no banco de dados e impedir que pessoas maliciosas tenham acesso a quantidade de registros do banco de dados.

  [ x ] [alterar no arquivo de migrações o tipo de dado do ID para UUID](docs/sobre_uuid.md)

  [ x ] [no modelo de usuário excluir das consultas ao banco de dados o retorno da campo/atributo senha](docs/sequelize-scopes.md)

  [ x ] fazer a migração da tabela de usuários

  ```shell
  npx sequelize db:migrate
  ```

- Criar rotas usando express para diferenciar cada serviço do CRUD de usuarios.

  [ x ] criar arquivo rotas para usuários em `api/routes/usuariosRoute.js`

  [ x ] adicionar rota do usuário ao index de rotas em `api/routes/index.js`

- Implementar o CRUD de usuários

- Imprementar função para cadastrar

  [ x ] criar controlator de usuários em `api/controllers/usuarioController.js`

  **observações:**

  - classe que recebe as requisições para cadastrar usuários e responde com um novo usuário
  - \*deverá conter um método `static` para **cadastrar** usuário
  - deverá ter apenas código referente a requisição e não regra de negócio e acesso a base de dados

  [ x ] criar serviço para o controlador de usuários em `api/services/usuarioService.js`

  **observações:**

  - \*devará conter método para **cadastrar** usuário
  - \*fará a ponte entre o banco de dados e o controlador

- Implementar função para buscar
  [ ] controller, service e rota
  I
- Implementar função para buscar por id
  [ ] controller, service e rota

- Implementar função para editar
  [ ] controller, service e rota

- Implementar função para deletar
  [ ] controller, service e rota

- Criptografar senhas para aumentar a segurança dos dados do usuário no banco de dados

  [ x ] [criar metodo no service de usuário para cadastrar usuário e salva senha como uma hash via `bcryptjs`](docs/sobre_crypt-bcrypt-bcryptjs.md)

- Fazer consultas no banco de dados usando ORM Sequelize

  [ x ] no `usuarioService` verificar se o usuário a ser criado já existe

### Autenticação

> Login de usuários com rotas privadas usando token de acesso

[ ] criar modulo de autenticação para

- fazer login de usuários
- rotas com token de acesso

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
