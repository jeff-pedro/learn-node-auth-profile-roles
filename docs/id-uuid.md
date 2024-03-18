## Definição do UUID na migration do Sequelize

```javascript
id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUID4
    }
```

## Diferenças entre versões do UUID

  - **UUID v1**: gera id baseado no timestamp e MAC address
  - **UUID v4**: usa gerador de números aleatório dependendo do web site que foi gerado


## **UUID vs IDs sequênciais como Chave Primária**

### UUID

- Capacidade de compartilhar dados através de sistemas distribuídos.
- Remove a necessidade de um sistema centralizado que gerencia a coordenação de IDs.
- É globalmente único, o que é maginifico para sistemas distribuídos.
- Reduz a complexidade na integração entre banco de dados.
- Aumenta segurança ao dificultar predizer o identificador do próximo registro.
- Identificador pode ser gerato tanto pela base de dados como por um sistema.
- Por ser globalmente único, pode ser gerado pelo sistema sem precisar esperar que um insert seja executado no bd, para termos o valor da chave primária.
- Problemas de performance no consumo de memmória pois cada uuid representão 128 bits (2x bitint, 4x int).
- Problemas de performance no consumo de memmória em cosultas e geração de índices.
- Por ser representado por 32 digitos hexadecimais não é dificil de ler (não user-friendly).
- Não tem como ordenar os dados da maneira tradicional (por id) aumentando o tempo de execução em uma consulta.

### ID sequêncial

- Melhor performance na execução consultas em lote.
- A ordenação dos dados é mais fácil e perfomático.
- Simples de ler e lembrar.
- Usar índices entre chave primaria e estrangeira para aumentar velocidade em consultas e joins.
- Indentificadores são previsíveis permitindo adinhanhar o próximo registro em uma tabela, expondo assim informações sobre os dados do negócio.
- Só recebemos o valor da chave primária após inserção no banco de dados.
- Aumenta complexidade ao integrar sistemas distribuidos com a base de dados.
- Limitação de quatidades de IDs (máximo 2.147.483.647).

### Comparação

| UUID                                              | Sequential ID                                                        |
| ------------------------------------------------- | :------------------------------------------------------------------- |
| Leva 128 bits                                     | Leva 64 bits quando vem de uma BIGINT e 32 bits do tipo inteiro      |
| Colisões são apenas possíveis na teoria           | Colisão é possível devido a limitação de tamanho                     |
| Funciona bem com sistemas distribuídos            | Precisa ter um componente coordenador para evitar valores duplicados |
| Suportado por NoSQL e banco de dados distribuídos | Não é recomendado usar com NoSQL e bancos de dados distribuídos      |
| Não previsíveis                                   | Previsíveis                                                          |
| Não é possível ordenar pelo indentificador        | Ordenação fácil e perfomático                                        |
| Maior consumo de memória em consultas             | Melhor performance em consultas em lote                              |
| Difícil de lembrar e vocalizar                    | Fácil de lembrar e ler                                               |

### Conclusão

A escolha entre usar UUID e IDs sequencias vai depender do tipo especificação do sistema.

UUID é a melhor escolha para sistemas distribuídos no qual precisamos de identificadores globais e quando a segurança da informação for um requisito imprecindível.

ID é a escolha quando existir limitação no uso de memória e necessidade de performance na execução de consultas.

## Referências

- [Sequelize models](https://sequelize.org/docs/v6/core-concepts/model-basics/#uuids)
- [Qual UUID usar?](https://stackoverflow.com/questions/20342058/which-uuid-version-to-use)
- [Diferenças entre UUID e ID sequêncial](https://www.baeldung.com/uuid-vs-sequential-id-as-primary-key)