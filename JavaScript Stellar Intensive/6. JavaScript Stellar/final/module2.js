//DEFAULT EXPORT
let name = 'Chris Evans';
let actorName = {
    getName: function(){
        return name
    },
    setName: function(newName){
        name = newName;
    }
}
export {name};
export default actorName;