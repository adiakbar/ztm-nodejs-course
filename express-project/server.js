const express = require('express');
const path = require('path');

const messagesRouter = require('./routes/messages.router');
const friendsRouter = require('./routes/friends.router');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}`);
});

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  // res.send('Hellooooo');
  res.render('index', {
    title: 'My Friend in hbs',
    caption: 'Let\'s go skiing'
  });
});

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});