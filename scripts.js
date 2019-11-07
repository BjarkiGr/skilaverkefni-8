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
      const checkbox = document.querySelector(".item__checkbox");
      checkbox.addEventListener("click", finish);

      const button = document.querySelector(".item__button");
      button.addEventListener("click", deleteItem);

      const text = document.querySelector(".item__text");
      text.addEventListener("click", edit);
    }

    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();
    const input = e.target.querySelector(".form__input");
    if (input.value.trim().length > 0) {
      add(input.value.trim());
    }
    input.value = "";

    console.log("halló heimur");
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    e.target.parentNode.classList.toggle("item--done");
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {}

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {}

  // fall sem sér um að bæta við nýju item
  function add(value) {}

  // event handler til að eyða færslu
  function deleteItem(e) {
    const parent = e.target.parentNode;

    const checkbox = parent.querySelector(".item__checkbox");
    const button = parent.querySelector(".item__button");
    const text = parent.querySelector(".item__text");

    checkbox.removeEventListener("click", finish);
    button.removeEventListener("click", deleteItem);
    text.removeEventListener("click", edit);

    parent.parentNode.removeChild(parent);
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
    const element = document.createElement(type);
    if (className) {
      element.classList.add(className);
    }
    if (clickHandler) {
      element.addEventListener("click", clickHandler);
    }
    return element;
  }

  return {
    init: init
  };
})();
