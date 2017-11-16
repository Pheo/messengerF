/* Here place all intelligence to handle messages and answer back the user */
import send, { Text } from './send';

const handleMessage = m => {
  const { sender: { id: userId }, message: { text } } = m;
  const r = `Message: ${text} from user ${userId}`;

  //Here we send back same message
  send(userId, Text(text));

  return r;
};

export default handleMessage;
