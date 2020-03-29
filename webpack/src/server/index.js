import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/App';
import htmlTemplate from './htmlTemplate';

const port = process.env.PORT || 3000;
const server = express();

server.use(express.static(path.resolve(__dirname, '../../dist')));

server.get('/', (req, res) => {
  const title = 'Webpack-React';
  const body = renderToString(<App />);

  res.send(
    htmlTemplate({
      title,
      body,
    }),
  );
});

server.listen(port);
console.log(`Server listening on port ${port}. See: http://localhost:${port}.`);
