const mysql = require('mysql2')
const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'calculadora_db'
});

conexao.connect((erro) => {
  if (erro) {
    console.error('Erro ao conectar ao MySQL:', erro);
    return;
  }
  console.log('✅ Conectado ao banco de dados!');
});