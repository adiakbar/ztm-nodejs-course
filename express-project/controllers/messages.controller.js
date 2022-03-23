const path = require('path');

function getMessages (req, res) {
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'))
  // res.send('<ul><li>this is a list</li></ul>');
  res.render('messages', {
    title: 'Message to my friends',
    friend: 'Adi Akbar'
  });
}

function postMessage(req, res) {
  res.send('updating message');
}

module.exports = {
  getMessages, 
  postMessage
};