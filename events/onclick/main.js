((win, doc) => {
  'use strict';

  const box = doc.querySelector('.box-item');

  box.addEventListener('click', () => {
    var boxList = doc.querySelector('.box-list');
    var boxCopy = box.cloneNode(false);
    boxList.appendChild(boxCopy);
  }, false);
})(window, document);
