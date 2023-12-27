// Usando a Biblioteca jsonwebtoken para criar token de usuários
import jwt from 'jsonwebtoken'

// Declarando Banco de Dados
let users = [];

// Variável de Ambiente
const SECRET = process.env.JWT_SECRET

// Criando Token que possui o email e senha com a variavel SECRET
function createToken(user){
  return jwt.sign({email: user.email, name: user.name}, SECRET)
}

//Criando função para validar o Token
function readToken(token){
  try{
    return jwt.verify(token, SECRET)
  } catch(err){
    throw new Error('Token inválido')
  }
}

// Função de POST de usuários
export function cadastro(body) {
  const existingUser = users.find(({ email }) => email === body.email);
  
  //Tratando erro de duplicidade
  if (existingUser) {
    throw new Error("Usuário já existe");
  }

  //Inserindo Usuário no Banco
  users.push(body);

  const token = createToken(body)
  //Retorna o Token criado
  return token;
}

// Função que faz o GET de usuario e senha 
export function login(body) {
  //Consumindo banco de dados
  const user = users.find(({ email }) => email === body.email);
  // Validando se o Usuário exite
  if (!user) throw new Error("Usuário não encontrado");
  // Validando se a senha está correta
  if (user.password !== body.password) throw new Error("Senha incorreta");


  const token = createToken(user)
  return token
}
