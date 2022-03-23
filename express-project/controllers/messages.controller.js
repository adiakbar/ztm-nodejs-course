function getMessages (req, res) {
  res.send('<ul><li>this is a list</li></ul>');
}

function postMessage(req, res) {
  res.send('updating message');
}

module.exports = {
  getMessages, 
  postMessage
};