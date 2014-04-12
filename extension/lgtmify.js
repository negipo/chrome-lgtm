function copy(string) {
  var input = document.getElementById('text');
  input.value = string;
  input.select();
  document.execCommand('copy', false, null);
}

function imageHandler(info, tab) {
  copy('http://lgtm.herokuapp.com/' + info.srcUrl);
}

chrome.contextMenus.create({
  'title' : 'Copy image link with LGTM',
  'type' : 'normal',
  'contexts' : ['image'],
  'onclick' : imageHandler
});
