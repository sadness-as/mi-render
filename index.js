import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Proyecto carrito de compras online :D');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});