const express = require('express');

const app = express();

app.get('/courses', (_, response) =>
  response.json(['Curso 1', 'Curso 2', 'Curso 3'])
);

app.post('/courses', (_, response) =>
  response.send(['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4'])
);

app.put('/courses/:id', (_, response) =>
  response.send(['Curso 1 a', 'Curso 2', 'Curso 3', 'Curso 4'])
);

app.patch('/courses/:id', (_, response) =>
  response.send(['Curso 1 a', 'Curso 2 a', 'Curso 3', 'Curso 4'])
);

app.delete('/courses/:id', (_, response) =>
  response.send(['Curso 2', 'Curso 3', 'Curso 4'])
);

app.listen(3333, () => console.log('Server started at :3333'));
