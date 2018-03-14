((win, doc) => {
  'use strict';

  var item = doc.querySelectorAll('.item');

  win.addEventListener('hashchange', () => {
    item.forEach((item) => {
      if (location.hash.endsWith(item.id))
        return item.style.background = item.id;
      return item.style.background = '#e5e5e5';
    });
  }, false);
})(window, document);
