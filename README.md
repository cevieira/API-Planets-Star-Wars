# Desafio Técnico B2W

# Requisitos
- A API deve ser REST
- Para cada planeta, os seguintes dados devem ser obtidos do banco de dados da aplicação, sendo inserido manualmente:
Nome
Clima
Terreno
- Para cada planeta também devemos ter a quantidade de aparições em filmes, que podem ser obtidas pela API pública do Star Wars:  https://swapi.co/

# Funcionalidades desejadas: 

- Adicionar um planeta (com nome, clima e terreno)
- Listar planetas
- Buscar por nome
- Buscar por ID
- Remover planeta
 
# Configuração
- A linguagem utilizada neste projeto é Javascript utilizando o framework NodeJs com banco de dados NoSQL MongoDB, utilizando Express, Mongoose, Axios e Body Parser. Foi utilizado o Nodemon para auxiliar o desenvolvimento
- A aplicação foi disponibilizada no Heroku, para auxiliar nos testes: https://planetsstarwars.herokuapp.com/planets
- É necessário ter uma conexão com internet para o funcionamento correto da aplicação, pois há integração com a API pública do Star Wars: https://swapi.co/.
- Foi utilizado o Postman para os testes durante o desenvolvimento.
 
# Funcionamento da Aplicação

- A API conta com as seguintes funcionalidades para o usuário:
º Adicionar um planeta, com nome, clima e terreno, não sendo permitido adicionar planetas com nomes repetidos e adicionar manualmente o número de filmes do planeta, ao adicionar um planeta, é feita uma busca na API pública do Star Wars (https://swapi.co/), para verificar a quantidade de aparições em filmes do planeta que está sendo inserido. e a
º Listar todos os planetas cadastrados na base de dados
º Buscar um planeta pelo seu nome
º Buscar um planeta pelo seu ID
º Remover um planeta pelo seu ID

# Como fazer as requisições para a API

1. Adicionar um planeta
- Tipo de Request que deve ser utilizado: POST
- Caminho a ser utilizado: /planets/
- Exemplo de Body Request:
º {"name": "Tatooine", "climate": "Árido", "terrain" "Deserto"}

2- Listar todos os planetas cadastrados
- Tipo de Request que deve ser utilizado: GET
- Essa busca contém paginação e limite de registros por pagina, o default são 10 registros por pagina, exemplo de como utilizar a paginação: https://planetsstarwars.herokuapp.com/planets=?page=2&limit=5
- Caminho a ser utilizado: https://planetsstarwars.herokuapp.com/planets/

3- Buscar um planeta pelo seu nome
- Tipo de Request que deve ser utilizado: GET
- Caminho a ser utilizado: https://planetsstarwars.herokuapp.com/planets/name/
- Exemplo de uso:
ºhttps://planetsstarwars.herokuapp.com/planets/name/Tatooine

4- Buscar um planeta pelo seu ID
-Tipo de Request que deve ser utilizado: GET
- Caminho a ser utilizado: https://planetsstarwars.herokuapp.com/planets/
- Exemplo de uso:
º https://planetsstarwars.herokuapp.com/planets/7a01816g1612dd33c9fe3a0v

5- Remover planeta pelo ID
- Tipo de Request que deve ser utilizado: DELETE
- Caminho a ser utilizado: https://planetsstarwars.herokuapp.com/planets/
- Exemplo de uso:
º https://planetsstarwars.herokuapp.com/planets/7a01816g1612dd33c9fe3a0v

