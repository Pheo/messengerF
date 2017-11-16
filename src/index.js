import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';

import subscribe from './subscribe';
import receive from './receive';
import handle from './handle';

const app = new Koa();
const router = new Router();

router.get('/webhook', subscribe);

router.post('/webhook', receive);

app.listen(3000);

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());
