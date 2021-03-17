const express = require('express');

const app = express();

app.use(express.json())

app.get('/courses', (request, response) => {
  const { page, limit, order } = request.query;

  console.log({ page, limit, order });

  return response.json(['Curso 1', 'Curso 2', 'Curso 3']);
});

app.post('/courses', (request, response) => {
  const { course } = request.body;

  const courses = ['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4']

  courses.push(course)

  response.send(courses)
});

app.put('/courses/:id', (request, response) => {
  const { id } = request.params;

  console.log({ id });

  return response.send(['Curso 1 a', 'Curso 2', 'Curso 3', 'Curso 4']);
});

app.patch('/courses/:id', (_, response) =>
  response.send(['Curso 1 a', 'Curso 2 a', 'Curso 3', 'Curso 4'])
);

app.delete('/courses/:id', (_, response) =>
  response.send(['Curso 2', 'Curso 3', 'Curso 4'])
);

app.listen(3333, () => console.log('Server started at :3333'));
