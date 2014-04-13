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
  copy('![LGTM](http://lgtm.herokuapp.com/' + info.srcUrl + ')');
}

chrome.contextMenus.create({
  'title' : 'Copy image link with LGTM',
  'type' : 'normal',
  'contexts' : ['image'],
  'onclick' : imageHandler
});

chrome.contextMenus.create({
  'title' : 'Copy image link with LGTM as markdown',
  'type' : 'normal',
  'contexts' : ['image'],
  'onclick' : imageWithMarkdownHandler
});
