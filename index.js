const express = require('express');

const app = express();

const port = 7000;

app.get('/', (req, res) => {
  res.send('Welcome to my favourite movie list');
});

const movies = [
  {
    id: 1,
    title: 'Citizen Kane',
    director: 'Orson Wells',
    year: '1941',
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    year: '1972',
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    year: '1994',
    color: true,
    duration: 180,
  },
];

const getMovies = (req, res) => {
  res.status(200).json(movies);
};

app.get('/api/movies', getMovies);

app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find((c) => c.id === parseInt(req.params.id));
  if (!movie) res.status(404).send('Not Found');
  res.send(movie);
});

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on('error', (err) => {
    console.error('Error:', err.message);
  });
