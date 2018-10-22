const fs = require("fs");
const crypto = require("crypto");

const loadTask = taskFile => {
    const fileContent = fs.readFileSync(taskFile);
    const fileContentInJSON = JSON.parse(fileContent);
    return fileContentInJSON;
};

const encrypt = (text, a, b) => {
    return "encypted == " + text + " " + a + " " + b;
};

const taskFile = "task.json";

const task = loadTask(taskFile);
// x = encrypt(task.input, task.a, task.b);
// console.log(x);


const aes192Cipher = input => {
    const cipher = crypto.createCipher("aes192", "password");

    let encrypted = "";

    cipher.on('readable', () => {
        const data = cipher.read();
        if (data)
          encrypted += data.toString('hex');
      });

    cipher.on('end', () => {
        // console.log(encrypted);
        // Prints: ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504
    });

    cipher.write(input);
    cipher.end();
      
    return encrypted;
};

const aes192Decipher = encrypted => {
    const decipher = crypto.createDecipher('aes192', 'password');

    let decrypted = '';
    decipher.on('readable', () => {
      const data = decipher.read();
      if (data)
        decrypted += data.toString('utf8');
    });
    decipher.on('end', () => {
    //   console.log(decrypted);
      // Prints: some clear text data
    });
    

    decipher.write(encrypted, 'hex');
    decipher.end();  
    
    return decrypted;
}

x = aes192Cipher(task.input);
y = aes192Decipher(x);
console.log(x);
console.log(y);