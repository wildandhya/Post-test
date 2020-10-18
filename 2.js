
const findWord = (word)=>{
    let text = word.split("");
    let searchRecur = text.filter((value, index) => value === value[index]);
    console.log(searchRecur)
}
 findWord('ABCAD')