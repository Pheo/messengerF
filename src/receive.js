import R from 'ramda';
import config from './config';

const { handler } = config;

export const messagings = R.pipe(R.prop('entry'), R.chain(R.prop('messaging')));

const receive = ctx => {
  R.forEach(handler, messagings(ctx.request.body));
  ctx.statusCode = 200;
  ctx.body = 'EVENT_RECEIVED';
};

export default receive;
