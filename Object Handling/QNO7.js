//Write a JavaScript program which returns a subset of a string.
function getSubSet(str){
    let subSet = {};
    for(let i = 0; i < str.length;i++){
    for(let j = i+1;j <=str.length;j++){
        subSet[str.slice(i,j)]= true;
    }    
    }
    return Object.keys(subSet);
}
  console.log(getSubSet("dog"));
  