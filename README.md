## Scripts

### `npm start` - Roda o Frontend do projeto


### `npm run start:backend` - Roda o Backend do projeto

### `npm run db:reset` - Apaga o banco de dados e roda todas a migrations/seeders. Também pode ser usado para iniciar o banco de dados pela primeira vez


## Configuração

### Frontend

 - frontend/src/config/config.js
   - BACKEND_URL - Url para acesso ao backend

### Backend

 - backend/.env
   - DB_USERNAME - Usuário para acesso ao banco de dados
   - DB_PASSWORD - Senha para acesso ao banco de dados
   - DATABASE    - Nome para o banco de dados
   - DB_HOST     - Host para acesso ao banco de dados
   - DB_PORT     - Porta para acesso ao banco de dados
   - PORT        - Porta em que o express ficará aberto, se for deixado vazio o padrão será 7000
