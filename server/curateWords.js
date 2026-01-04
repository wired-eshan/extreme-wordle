import xlsx from "xlsx";
import fs from "fs";

const workbook = xlsx.readFile("./englishWords.xlsx");

const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const jsonData = xlsx.utils.sheet_to_json(worksheet);
const wordData = new Map();

jsonData.map(item => {
    const word = item.Word;
    const n = word.length;
    wordData.set(n, (wordData.get(n) || 0)+1);
});

console.log("Statistics: word length -> number of words", wordData);

const data = JSON.stringify(jsonData, null, 2);

fs.writeFile("words.json", data, (err) => {
    if(err) {
        console.log("Error writing file:", err);
    } else {
        console.log("Data written to file successfully");
    }
});
