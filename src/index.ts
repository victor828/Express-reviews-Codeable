import express from "express";

const app = express();
const PORT = 5500; //* <-- podemos cambiar a 0 y elegira automaticamente un puerto libre

const server = app.listen(PORT, () => {
  const { port } = server.address() as any;
  console.log(`Escuchando en  http://localhost${port}`);
});
