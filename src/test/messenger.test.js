import messenger, { messagings } from '../receive';
import handle from '../handle';
import data from '../data';
// const data = require('../data');
const message = {
  sender: { id: 'IDUSUARIO' },
  recipient: { id: 'IDPAGINA' },
  timestamp: 1458692752478,
  message: {
    mid: 'mid.1457764197618:41d102a3e1ae206a38',
    text: 'hello, world!',
  },
};
test('receiving messages', () => {
  expect(messagings(data)).toEqual([message]);
});

test('get messages', () => {
  expect(handle(message)).toMatch(/^Message: (.*) from user (\w+)$/);
});
