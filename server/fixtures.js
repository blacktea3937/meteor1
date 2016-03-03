if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'hello world',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Test 1',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book 1',
    url: 'http://themeteorbook.com'
  });
}