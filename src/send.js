import axios from 'axios';
import config from './config';
import R from 'ramda';

const { access_token } = config;

const api = x =>
  axios
    .post(
      `https://graph.facebook.com/v2.6/me/messages?access_token=${access_token}`,
      x
    )
    .catch(error => console.log(error));

const message = (id, message) => ({
  recipient: {
    id,
  },
  message,
});

export const Text = text => ({
  text,
});

export default R.compose(api, message);
