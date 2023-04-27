const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Sayem');

fs.appendFileSync('notes.txt', '\nThis is a new message');
