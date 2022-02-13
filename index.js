class randomNumber {
  constructor(value) {
    this.colorName = Math.floor(Math.random() * 255);
    this.selectElement = document.querySelector(value);
  }
}

const body = new randomNumber("body").selectElement;
const inputValue = new randomNumber("input").selectElement;
const btnCopy = new randomNumber(".btn-copy").selectElement;
document.querySelector(".btn").addEventListener("click", () => {
  btnCopy.innerHTML = "Copy";
  const hexaCode = `#${new randomNumber().colorName.toString(
    16
  )}${new randomNumber().colorName.toString(
    16
  )}${new randomNumber().colorName.toString(16)}`;
  console.log(hexaCode);
  body.style.backgroundColor = hexaCode;
  inputValue.value = hexaCode;
});
//copy to the color code from input box
document.querySelector(".btn-copy").addEventListener("click", () => {
  navigator.clipboard.writeText(inputValue.value);
  btnCopy.innerHTML = "Copied";
});
