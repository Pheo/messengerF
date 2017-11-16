import axios from 'axios';
import config from './config.js';
import R from 'ramda';

const { access_token } = config;

const api = x =>
  axios
    .post({
      uri: 'https://graph.facebook.com/v2.6/me/messages',
      qs: {
        access_token,
      },
      method: 'POST',
      json: x,
    })
    .catch(error => console.log(error));

const message = (id, message) => ({
  recipient: {
    id,
  },
  message,
});

const Text = text => ({
  message: text,
});

export const Text;
export default R.compose(api, message);
