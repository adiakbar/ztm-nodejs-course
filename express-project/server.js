const express = require('express');
const { restart } = require('nodemon');

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 1,
    name: "Sir Isaac Newton"
  },
  {
    id: 2,
    name: "Albert Einstein"
  }
];

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

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if(friend) {
    res.status(200).json(friend);
  } else {
    req.status(404);
  }
});

app.post('/friends', (req, res) => {
  res.status(200).json('success');
  if(!req.body.name) {
    res.status(400).json({
      error: 'Missing friend name'
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length + 1
  };
  friends.push(newFriend);

  // console.log('halo');
  req.status(200).send('berhasil');
})

app.get('/messages', (req, res) => {
  res.send('<ul><li>this is a list</li></ul>');
});

app.post('/messages', (req, res) => {
  console.log('updating message');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});