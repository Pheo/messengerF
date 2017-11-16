/* Here place all intelligence to handle messages and answer back the user */

const handleMessage = m => {
  const { sender: { id: userId }, message: { text } } = m;
  const r = `Message: ${text} from user ${userId}`;
  console.log(r);
  return r;
};

export default handleMessage;
