// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2016", result: "N/A"},
    { year: "2017", result: "L"},
]
function superbowlWin(record){
    const result = record.find( record => record.result === "W");
    return !!result ? result.year : undefined;
}