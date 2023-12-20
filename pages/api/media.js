// pages/api/media.js
export default (req, res) => {
  if (req.method === "POST") {
    // Lógica para criar uma mídia
    const newMedia = {
      id: 1,
      nome: req.body.nome,
      imageLink: req.body.imageLink,
      bgLink: req.body.bgLink,
      categoria: req.body.categoria,
    };
    res.status(201).json(newMedia);
  } else if (req.method === "GET") {
    // Lógica para obter todas as mídias
    const mediaList = [
      { id: 1, nome: "Media 1", categoria: "Comédia" },
      { id: 2, nome: "Media 2", categoria: "Ação" },
    ];
    res.status(200).json(mediaList);
  } else {
    res.status(405).end(); // Método não permitido
  }
};
