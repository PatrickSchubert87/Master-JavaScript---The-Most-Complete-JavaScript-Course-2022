//NAMED EXPORTS
let fullName = 'Jack Reacher';

let getName = function(){
    return fullName.toUpperCase();
}
let setName = function(newName){
    fullName = newName;
}

// export {fullName};
// export {getName};
// export {setName};
export {fullName, getName, setName};