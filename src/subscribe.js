import R, { chain } from 'ramda';
import config from './config';

const { verify_token } = config;

const subscribe = ctx => {
  const mode = ctx.query['hub.mode'];
  const token = ctx.query['hub.verify_token'];
  const challenge = ctx.query['hub.challenge'];

  if (mode && token && mode === 'subscribe' && token == verify_token) {
    ctx.statusCode = 200;
    ctx.body = challenge;
  } else {
    ctx.statusCode = 403;
  }
};

export default subscribe;
