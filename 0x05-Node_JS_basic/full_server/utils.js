const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    if (!filePath) {
      reject(new Error('Cannot load the database'));
    }

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      const dataLine = data.toString().trim().split('\n').slice(1);

      const fields = {};

      dataLine.forEach((line) => {
        const student = line.split(',');

        if (!student[3] in feilds)) fields[student[3]] = [];

        fields[student[3]].push(student[0]);
      });
      resolve(fields);
    });
  });
}

module.exports = readDatabase;
