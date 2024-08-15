import express from 'express';

const app = express();
const PORT = process.env.PORT || 4800;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Express.js!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
