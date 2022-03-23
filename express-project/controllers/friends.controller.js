const friends = require('../models/friends.model');

function getFriends(req, res) {
  res.json(friends);
}

function getFriendById(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if(friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send('error');
  }
}

function postFriend(req, res) {
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
}

module.exports = {
  getFriends,
  getFriendById,
  postFriend
}