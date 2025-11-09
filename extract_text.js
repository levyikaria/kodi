const fs = require('fs');
const pdfParse = require('pdf-parse');

const pdfPath = '/vercel/sandbox/uploads/_Copy of George Leventeris Final Resume 2025 1.pdf';

pdfParse(fs.readFileSync(pdfPath)).then(function(data) {
    console.log(data.text);
});