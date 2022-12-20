const fs = require('fs');

// employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)

fs.appendFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
});

// Bu veriyi okuyalım. (READ)
fs.readFile('employees.json', 'utf8', (err, data) => { 
    if (err) console.log(err);
    console.log(data);
  })
// Bu veriyi güncelleyelim.
fs.writeFile('employees.json', '{"name": "Employee 2 Name", "salary": 4000}', 'utf8', (err) => {
    if (err) console.log(err);
});
// Dosyayı silelim.

fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
});