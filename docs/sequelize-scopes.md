## Escopos


Seguindo as boas práticas de programação e as regras da LGPD (Lei Geral de Proteção de Dados Pessoais), não é recomendado retornar a senha do usuário de forma padrão nas consultas.

Por isso adicionamos dentro da **model** uma validação para remover a coluna de "senha" e não retornar ela de forma padrão nas consultas.

~~~javascript
defaultScope: {
  attributes: {
    exclude: ['senha'];
  }
}
~~~

### Referências

- [Scopes](https://sequelize.org/docs/v6/other-topics/scopes/)