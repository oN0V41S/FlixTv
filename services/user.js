import jwt from 'jsonwebtoken'
let users = []

const SECRET = process.env.JWT_SECRET

function generateToken(user) {
  return jwt.sign({ email: user.email , name: user.name,  }, SECRET)
}

function readToken(token) {
  try {
    return jwt.verify(token, SECRET)
  } catch (err) {
    throw new ('Token invalido')
  }
}

export function cadastro(body) {
  // Verifica se o email está no banco de dados
  const user = users.find(({ email }) => email === body.email)
  // Tratamento de Erro de criação usuário
  if (user) throw new Error('Usuario já cadastrado')

  users.push(body) //substituir por um BD

  // Gera token do usuário
  const token = generateToken(body)

  // retorna o token do usuário 
  return "Usuário cadastrado token do usuário: " + token
}

export function login(body) {
  const user = users.find(({ email }) => email === body.email) //substituir por um bd
  if (!user) throw new Error('Usúario não encontrado')
  if (user.password !== body.password) throw new Error('Senha incorreta')

  const token = generateToken(user)
  return token
}

export function verifica(token) {
  return readToken(token)
}