Template.postItem.helpers({
  ownPost: function() {
    return this.userId === Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    //console.log(a);
    a.href = this.url;
    //console.log(a);
    return a.hostname;
  }
});