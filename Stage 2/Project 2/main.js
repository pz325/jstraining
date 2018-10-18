/**
 * task: {
    input: "some input text",
    a: 2,
    b: 2
}
 */
// this is actually an Object. Not JSON in String
const taskDefInJSON = {
  input: "some input text from JSON",
  a: 2,
  b: 5
};


const taskDefInXML =
  "<task><input>some input text from XML</input><a>2</a><b>5</b></task>";

/**
 *
 * @param {String} taskDefInStr
 * @return Return a task def in JSON
 */
const convertTaskDefFromXML2JSON = taskDefInStr => {
  const parser = new DOMParser();
  const dom = parser.parseFromString(taskDefInStr, "application/xml");
  let taskDef = {};
  taskDef["input"] = dom.documentElement.children[0].innerHTML;
  taskDef["a"] = dom.documentElement.children[1].innerHTML;
  taskDef["b"] = dom.documentElement.children[2].innerHTML;
  return taskDef;
};

const encrypt = (text, a, b) => {
  return "encypted == " + text + " " + a + " " + b;
};

const runEncyptJob = taskDef => {
  const encrypted = encrypt(taskDef.input, taskDef.a, taskDef.b);
  return encrypted;
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
  outputEncrypted(encrypted);
};

const buttonLoadTaskDefHandler = () => {
  const encrypted = runEncyptJob(taskDefInJSON);

  // 3. output to the page
  outputEncrypted(encrypted);
};

const buttonLoadTaskDefXMLHandler = () => {
  const encypted = runEncyptJob(convertTaskDefFromXML2JSON(taskDefInXML));
  outputEncrypted(encypted);
};

const outputEncrypted = output => {
  const outputNode = document.getElementById("pOutput");
  outputNode.innerHTML = output;
};

const start = () => {
  const buttonEncrypt = document.getElementById("buttonEncrypt");
  buttonEncrypt.onclick = buttonEncryptHanlder;

  const buttonLoadTaskDef = document.getElementById("buttonLoadTaskDef");
  buttonLoadTaskDef.onclick = buttonLoadTaskDefHandler;

  const buttonLoadTaskDefXML = document.getElementById("buttonLoadTaskDefXML");
  buttonLoadTaskDefXML.onclick = buttonLoadTaskDefXMLHandler;

  const buttonLoadTaskDefServer = document.getElementById(
    "buttonLoadTaskDefServer"
  );
  buttonLoadTaskDefServer.onclick = loadTaskJSON;
};

const loadTaskJSON = () => {
  const url =
    "http://localhost:8005/github/jstraining/Stage%202/Project%202/task.json";

  fetch(url)
    .then(resp => {
      return resp.json();
    })
    .then(json => {
      const encrypted = runEncyptJob(json);
      outputEncrypted(encrypted);
    });
};

document.addEventListener("DOMContentLoaded", start);
