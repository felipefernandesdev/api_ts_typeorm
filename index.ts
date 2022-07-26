import express from 'express';
const server = express();

server.get('/', (req, res) => {
  res.status(200).json({
    status: "Sucess",
    msg:"Welcome to API, read user guide documentation, use a lot"
  })
});

server.listen(5000, () =>
  console.log(`API is running on port 5000, process: ${process.pid}`),
);
