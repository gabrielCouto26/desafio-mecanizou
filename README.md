## Descrição

Desafio Mecanizou: API REST de Oficinas com serviço de busca geográfica.

## Preparação

Tenha instalado o Docker e docker-compose em seu local.

## Execução

```bash
$ docker-compose up app database redis
```

API disponível em: [servidor](http://localhost:3000/workshops)

## Teste

```bash
$ docker-compose up test database redis
```
ou apenas
```bash
$ docker-compose up test
```
caso os outros serviços já estejam em execução.

## Documentação

Projeto documentado com Swagger, disponível em: [documentação](http://localhost:3000/api)