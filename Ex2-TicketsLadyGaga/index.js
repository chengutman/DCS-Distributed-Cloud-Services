const http = require('http');
const controller = require('./controller');
const PORT= process.env.PORT || 3010;

const server= http.createServer(controller);

server.listen(PORT,()=>console.log (`listening on port ${PORT}`));

