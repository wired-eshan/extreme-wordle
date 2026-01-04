import csv from "csvtojson";
import fs from "fs";

const csvFilePath = "./dict.csv";

const dictionary = await csv().fromFile(csvFilePath);

const wordsByLength = new Map();

for(let item of dictionary) {
    const size = item.word.length;
    if(size>=3 && size<=6) {
        if (!wordsByLength.has(size)) wordsByLength.set(size, []);
        wordsByLength.get(size).push(item.word);
    }
}

console.log("map size:", wordsByLength.size);
console.log(wordsByLength);

for (const [size, item] of wordsByLength.entries()) {
    try {
        const filename = `${size}letter.txt`;
        await fs.promises.writeFile(filename, item.join("\n"));
        console.log(`${filename} written`);
    } catch (err) {
        console.error("Error writing file:", err);
    }
}
