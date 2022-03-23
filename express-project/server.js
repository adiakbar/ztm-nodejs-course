const express = require('express');

const messagesController = require('./controllers/messages.controller');
const friendsController = require('./controllers/friends.controller');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}`);
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hellooooo');
});

app.get('/friends', friendsController.getFriends);
app.get('/friends/:friendId', friendsController.getFriendById);
app.post('/friends', friendsController.postFriend);

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});