// // code your solution here
// function superbowlWin (record) {
//     const result = record.find(record);
//         return record.result === "W";
//         }

// superbowlWin = (record) => {

//     const result = record.find( record => record.result === "W" );
    
//   //  ✔ returns undefined if the record has no win objects
//     return !!result ? result.year : undefined;
// }
// function result() {
//     record.find(function (){
//         record.result === "W";
//     })
// }

// function superbowlWin(record){
//     return result();
// }
// // function superbowlWin(record) {
//     record.find(result);
//     return ;
// }

function superbowlWin (record) {
    const result = record.find( record => record.result === "W" );

    return !!result ? result.year : undefined;
}