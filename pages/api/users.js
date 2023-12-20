// pages/api/users.js
export default (req, res) => {
  if (req.method === "POST") {
    /*Lógica para criar um usuário*/
    const newUser = {
      id: 1,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };
    res.status(201).json(newUser);
  } else if (req.method === "GET") {
    // Lógica para obter todos os usuários
    const users = [
      { id: 1, email: "user1@example.com", role: "user" },
      { id: 2, email: "user2@example.com", role: "admin" },
    ];
    res.status(200).json(users);
  } else {
    res.status(405).end();
    /* Método não permitido */
  }
};
