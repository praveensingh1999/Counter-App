const element = document.querySelector("#counter");

const increment = () => {
  let value = parseInt(element.innerText);
  value = value + 1;
  element.innerText = value;
};

const decrement = () => {
  let value = parseInt(element.innerText);
  value = value - 1;
  element.innerText = value;
};
