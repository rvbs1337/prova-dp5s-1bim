# Documentação da API

A seguir está a documentação da API para a entidade "Personagens" da saga escolhida.

## Rotas

### Criação de um Personagem

**Método:** `POST`

**Endpoint:** `/character`

Cria um novo personagem na saga.

#### Parâmetros da Requisição

| Nome         | Tipo   | Descrição             |
|--------------|--------|-----------------------|
| name         | String | Nome do personagem    |
| description  | String | Descrição do personagem |
| img          | String | URL da imagem do personagem |

#### Exemplo de Requisição
```json
{
    "name": "Homem de Ferro",
    "description": "Um bilionário excêntrico e inventor brilhante, Tony Stark cria uma armadura poderosa para se tornar o super-herói conhecido como Homem de Ferro.",
    "img": "https://example.com/ironman.jpg"
}
```

#### Exemplo de Resposta
```json
{
    "_id": "60a40cbdbe650f4ef364b6a3",
    "name": "Homem de Ferro",
    "description": "Um bilionário excêntrico e inventor brilhante, Tony Stark cria uma armadura poderosa para se tornar o super-herói conhecido como Homem de Ferro.",
    "img": "https://example.com/ironman.jpg",
    "createdAt": "2022-05-18T12:30:05.000Z",
    "updatedAt": "2022-05-18T12:30:05.000Z"
}
```

### Atualização de um Personagem

**Método:** `POST`

**Endpoint:** `/character/:id`

Atualiza os detalhes de um personagem existente na saga.

#### Parâmetros da Requisição

| Nome         | Tipo   | Descrição             |
|--------------|--------|-----------------------|
| id           | String | ID do personagem a ser atualizado |
| name         | String | Nome atualizado do personagem    |
| description  | String | Descrição atualizada do personagem |
| img          | String | URL da imagem atualizada do personagem |

#### Exemplo de Requisição
```json
{
    "name": "Homem de Ferro - Tony Stark",
    "description": "Um bilionário excêntrico e inventor brilhante, Tony Stark cria uma armadura poderosa para se tornar o super-herói conhecido como Homem de Ferro.",
    "img": "https://example.com/ironman-new.jpg"
}
```

### Listagem de Todos os Personagens

**Método:** `GET`

**Endpoint:** `/character`

Retorna todos os personagens da saga.

### Busca de um Personagem por ID

**Método:** `GET`

**Endpoint:** `/character/:id`

Retorna os detalhes de um personagem específico da saga com base no ID fornecido.

### Exclusão de um Personagem

**Método:** `DELETE`

**Endpoint:** `/character/:id`

Exclui um personagem da saga com base no ID fornecido.

### Busca de um Personagem por Nome

**Método:** `GET`

**Endpoint:** `/character/nome/:name`

Retorna os detalhes de um personagem da saga com base no nome fornecido.

### Busca de Quadrinhos de um Personagem

**Método:** `GET`

**Endpoint:** `/character/comicCharacter/:name`

Retorna os quadrinhos em que um personagem específico da saga aparece, com base no nome fornecido.

## Controlador

### CharacterController

O `CharacterController` é responsável por lidar com as requisições relacionadas aos personagens da saga.

#### Métodos

- `create`: Cria um novo personagem.
- `findById`: Encontra um personagem pelo ID.
- `findAll`: Retorna todos os personagens.
- `updateById`: Atualiza um personagem pelo ID.
- `deleteById`: Exclui um personagem pelo ID.
- `findByName`: Encontra um personagem pelo nome.
- `findComicsByCharacter`: Retorna os quadrinhos em que um personagem específico aparece.

## Esquema

### CharacterSchema

O `CharacterSchema` é o esquema do Mongoose que define a estrutura de dados para a entidade "Personagem".

Campos:

- `id`: ID numérico do personagem.
- `name`: Nome do personagem.
- `description`: Descrição do personagem.
- `img`: URL da imagem do personagem.
- `comics`: Array de quadrinhos em que o personagem aparece.

## Serviço

### CharacterService

O `CharacterService` é responsável por fornecer métodos para manipular dados relacionados aos personagens da saga.

#### Métodos

- `create`: Cria um novo personagem.
- `findById`: Encontra um personagem pelo ID.
- `findAll`: Retorna todos os personagens.
- `updateById`: Atualiza um personagem pelo ID.
- `deleteById`: Exclui um personagem pelo ID.
- `findByName`: Encontra um personagem pelo nome.
- `findComicsByName`: Retorna os quadr