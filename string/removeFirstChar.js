//Delete first character of a string in JavaScript


function deleteFirstChar(str){
    //first method
    //let deletedChar = str.replace('J' , "")

    //second method
    let res = str.slice(1,str.length)
    return res
}


const str = 'Javascript';
console.log(deleteFirstChar(str))