((win, doc) => {
  'use strict';

  var primaryPerson = {
    value: 0,
    element: doc.querySelector('[data-person="primary"]'),
  };
  var secondaryPerson = {
    value: 0,
    element: doc.querySelector('[data-person="secondary"]')
  };

  var $lendToRight = doc.querySelector('[data-js="to-right"]');
  var $lendToLeft = doc.querySelector('[data-js="to-left"]');
  
  function defaultValues(primaryValue, secondaryValue) {
    primaryPerson.value = primaryValue;
    secondaryPerson.value = secondaryValue;
    primaryPerson.element.innerHTML = primaryPerson.value;
    secondaryPerson.element.innerHTML = secondaryPerson.value;
  }
  
  function lendValues(arrow, lendFrom, lendTo) {
    arrow.addEventListener('click', function() {
      if (primaryPerson.value > 0 || secondaryPerson.value > 0) {
        lendFrom.element.innerHTML = --lendFrom.value;
        lendTo.element.innerHTML = ++lendTo.value;
      }
      return;
    });

    arrow.addEventListener('mousedown', function(e) {
      clearInterval(this.downTimer);
      this.downTimer = setInterval(function() {
        if (primaryPerson.value > 0 || secondaryPerson.value > 0) {
          lendFrom.element.innerHTML = --lendFrom.value;
          lendTo.element.innerHTML = ++lendTo.value;
        }
      }, 200);
    });

    arrow.addEventListener('mouseup', function(e) {
      clearInterval(this.downTimer);
    });
  }
  
  defaultValues(5000, 5000);
  lendValues($lendToRight, primaryPerson, secondaryPerson);
  lendValues($lendToLeft, secondaryPerson, primaryPerson);
})(window, document);
