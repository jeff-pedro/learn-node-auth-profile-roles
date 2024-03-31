# Node.js Rest API: autenticação, roles and profile

> Repositório usado para aprender sobre autenticação, perfil e permissões com  Node.js aplicado a uma API RestFul.

## Requisitos
- Instância do Postgres
- Docker
- Node e NPM
- NVM (opcionalmente)

## Usando

### Docker Compose

1. subir o bando de dados e a aplicação via docker compose 
```shell
docker compose up --build -d
```

2. criar o bando de dados
```shell
docker exec supply-api npx sequelize db:create
```

3. migrar as tabelas para o banco de dados
```shell
docker exec supply-api npx sequelize db:migrate
```

### Manualmente

1. executar uma instância do postgres (docker, local ou cloud)

exemplo com docker
```shell
docker run --name postgres -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres
```

2. configurar parâmetros do banco de dados em `./api/config/config.json`

3. instalar as dependências
```shell
npm install
```

4. criar o bando de dados
```shell
npx sequelize db:create
```

5. migrar as tabelas para o banco de dados
```shell
npx sequelize db:migrate
```

6. executar a aplicação
```shell
npm start
```


## Explorado

### CRUD

- Criar tabelas no banco de dados usando CLI do Sequelize para salvar todos os usuários cadastrados.

  - criar tabela de _usuarios_ com "nome", "email" e "senha"

  ```shell
  npx sequelize model:create --name usuarios --attributes nome:string,email:string,senha:string
  ```

- Usar hash uuid para aumentar a segurança dos registro no banco de dados e impedir que pessoas maliciosas tenham acesso a quantidade de registros do banco de dados.

  - [alterar no arquivo de migrações o tipo de dado do ID para UUID](docs/id-uuid.md)

  - [no modelo de usuário excluir das consultas ao banco de dados o retorno da campo/atributo senha](docs/sequelize-scopes.md)

  - fazer a migração da tabela de usuários

  ```shell
  npx sequelize db:migrate
  ```

- Criar rotas usando o express para diferenciar cada serviço do CRUD de usuarios.

- Implementar o CRUD de usuários
  - controladores, serviços e rotas

- Criptografar senhas para aumentar a segurança dos dados do usuário no banco de dados
  - [cria método no service de usuário para cadastrar usuário e salvar senhas como hash via `bcryptjs`](docs/crypt-bcrypt-bcryptjs.md)

- Consultar no banco de dados usando ORM Sequelize


### Autenticação

> Login de usuários com rotas privadas usando token de acesso

- Criar um sistema de login utilizando token JWT para adicionar segurança as rotas da API
  - autenticando usuários ao comparar a senha armazenada com a senha passada na requisição
  - criando e retornando um token JWT que armazena os dados do usuário

- Criar um middleware para verificar se usuários estão autenticados na API
  - validando se um token está sendo recebido via requisição através do `req.headers.authorization`
  - varificando se o token é valido
  - retornando o payload do token na resposta

- Armazenar informações do usuário nos dados da requisição para utilizar dentro das controllers e services
  - usando o "payload" do token para enviar dados via requisição
  - usando os métodos do [jsonwebtoken](): `sign` para criar e `decode` para extrair o "payload"

- Adicionar o middleware de autorizaçao via token às rotas da aplicação
  - adicionando o middleware ao `Router.use()`


## Roles e Permissões
> Criação de permissões e perfís de usuários

  - Implementar CRUD de Roles para definir os tipos de perfis de usuários
  
  - Implementar CRUD de Permissões que define as permissões os usuários e roles terão
  
  - Criar tabelas pivô, por onde os modelos serão relacionados
  
  - Criar referência entre tabelas para saber quais serão as chaves primárias e estrangeiras nas tabelas
    - adiciona ação de remoção e atualização nas tabelas no modo CASCADE
  
  - Definir relacionamentos entre tabelas
    - [associassão](https://sequelize.org/docs/v6/core-concepts/assocs/) Many-to-Many entre os models


## ACL
  - Criar cadastro ACL que adiciona perfis e permissões em usuários para diferenciar os acessos

  - Criar cadastro de permissões nos perfis, diferenciando as permissões que cada tipo de usuário irá acessar

  - Utilizar funções alias do Sequelize para facilitar as ações entre tabelas relacionadas


## Middleware de Permissões

- Criar middleware de perfis de usuário para verificar quais os tipos de usuários podem ter acesso a um determinado endpoint

- Criar middleware de permissões do usuário para verificar quais as permissões podem ter acesso a um determinado endpoint

- Criar middleware de permissões de perfis de usuário, para verificar quais as permissões por perfil de usuário podem ter acesso a um determinado endpoint.
  
  
<!-- > [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions. -->
