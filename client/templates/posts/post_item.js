Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    //console.log(a);
    a.href = this.url;
    //console.log(a);
    return a.hostname;
  }
});