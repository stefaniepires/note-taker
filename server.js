const express = require('express');
const { savedNotes } = require('./Develop/db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();


app.get('/api/notes', (req, res) => {
  res.json(savedNotes);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});