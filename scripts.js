const ENTER_KEYCODE = 13;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const items = document.querySelector(".items");

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener("submit", formHandler);
    for (let item of items.querySelectorAll(".item")) {
      const checkbox = item.querySelector("item__checkbox");
      checkbox.addEventListener("click", finish);
      const button = item.querySelector(".item__button");
      button.addEventListener("click", deleteItem);
      const text = item.querySelector("item__text");
      text.addEventListener("click", edit);
    }
    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();
    console.log("Halló heimur");
    const input = e.target.querySelector('.form__input');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    e.target.parentNode.classList.toggle('item--done');
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {}

  // event handler til að eyða færslu
  function deleteItem(e) {}

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {}

  return {
    init: init
  };
})();
