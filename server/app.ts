import * as express from 'express';
import * as https from 'https';
import * as cors from 'cors';
import * as cheerio from 'cheerio';
import { json, urlencoded } from 'body-parser';
import * as path from 'path';
import * as compression from 'compression';
import * as request from 'request';



const app: express.Application = express();

app.disable('x-powered-by');
//app.use(cors());
app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

app.use('/', express.static(__dirname + '/../client'));

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
  let err = new Error('Not Found');
  next(err);
});

// production error handler
// no stacktrace leaked 
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {

  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message
  });
});

export { app }

