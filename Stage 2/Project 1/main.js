const encrypt = (text, a, b) => {
  return "encypted == " + text + " " + a + " " + b;
};

const buttonEncryptHanlder = () => {
  // 1. read from inputOriginText
  const inputOriginText = document.getElementById("inputOriginText");
  const inputText = inputOriginText.value;

  const inputA = document.getElementById("inputA");
  const a = inputA.value;
  const inputB = document.getElementById("inputB");
  const b = inputB.value;

  // 2. encrypt it
  const encrypted = encrypt(inputText, a, b);

  // 3. output to the page
  const outputNode = document.getElementById("pOutput");
  outputNode.innerHTML = encrypted;
};

const start = () => {
  const buttonEncrypt = document.getElementById("buttonEncrypt");
  buttonEncrypt.onclick = buttonEncryptHanlder;
};

document.addEventListener("DOMContentLoaded", start);
