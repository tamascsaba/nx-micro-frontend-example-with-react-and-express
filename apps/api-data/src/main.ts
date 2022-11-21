/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';

import {Employee} from '@lib/employee-interfaces';
import {gaelSmithyResponse} from './app/gael-smithy.response';
import {bobSmithResponse} from './app/bob-smith.response';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(cors());

app.get('/api/employee-data', (req, res) => {
  const employee = req.query.employee;
  let responseBody: Partial<Employee> = {};

  if (employee === 'bob-smith') {
    responseBody = bobSmithResponse;
  }

  if (employee === 'gael-smithy') {
    responseBody = gaelSmithyResponse;
  }
  res.send(responseBody);
});

const port = process.env.port || 3001;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
