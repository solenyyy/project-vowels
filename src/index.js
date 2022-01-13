function changeVowels() {
  const value = document.querySelector(".texto-value").value;
  let result = value.replace(/[aeou]/gi, "i");
  const usedDiv = document.querySelector(".result");
  const createP = document.createElement("p");
  usedDiv.insertAdjacentElement("beforeend", createP);
  createP.textContent = `〰 ${result}`;
}

const sendForm = document.querySelector(".btn");
sendForm.addEventListener("click", changeVowels);

document.querySelector("form").onsubmit = (e) => {
  e.target.reset();
  return false;
};
