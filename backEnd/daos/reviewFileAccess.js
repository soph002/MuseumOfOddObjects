const fs = require('fs');
const reviewFilePath = "./files/reviewFile.json"

function readReviews(){
    let reviewListBuffer = fs.readFileSync(reviewFilePath);
    return JSON.parse(reviewListBuffer.toString());
}

function writeReviews(reviewList){
    let JSONString = JSON.stringify(reviewList);
    fs.writeFileSync(reviewFilePath, JSONString);
}

module.exports = {
    readReviews,
    writeReviews
}