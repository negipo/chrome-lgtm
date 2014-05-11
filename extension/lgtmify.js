function copy(string) {
  var input = document.getElementById('text');
  input.value = string;
  input.select();
  document.execCommand('copy', false, null);
}

function imageHandler(info, tab) {
  copy('http://lgtm.herokuapp.com/' + info.srcUrl);
}

function imageWithMarkdownHandler(info, tab) {
  copy('[![LGTM](http://lgtm.herokuapp.com/' + info.srcUrl + ')](http://lgtm.herokuapp.com/)');
}

function imageWithCommentsHandler(info, tab) {
  copy('http://lgtm.herokuapp.com/with_comments/' + info.srcUrl);
}

function imageWithCommentsAndMarkdownHandler(info, tab) {
  copy('[![LGTM](http://lgtm.herokuapp.com/with_comments/' + info.srcUrl + ')](http://lgtm.herokuapp.com/)');
}

chrome.contextMenus.create({
  'title' : 'Copy image link with "LGTM"',
  'type' : 'normal',
  'contexts' : ['image'],
  'onclick' : imageHandler
});

chrome.contextMenus.create({
  'title' : 'Copy image link with "LGTM" as markdown',
  'type' : 'normal',
  'contexts' : ['image'],
  'onclick' : imageWithMarkdownHandler
});

chrome.contextMenus.create({
  'title' : 'Copy image link with "LGTM with comments"',
  'type' : 'normal',
  'contexts' : ['image'],
  'onclick' : imageWithCommentsHandler
});

chrome.contextMenus.create({
  'title' : 'Copy image link with "LGTM with comments" as markdown',
  'type' : 'normal',
  'contexts' : ['image'],
  'onclick' : imageWithCommentsAndMarkdownHandler
});
