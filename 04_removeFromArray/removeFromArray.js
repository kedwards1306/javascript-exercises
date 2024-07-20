const removeFromArray = function(array, ...args) {
    //creating a new array
    const newArray=[];
    array.forEach((item) => {
        //if the current item is not in the arguments, add it to the new array
        if(!args.includes(item)){
            newArray.push(item);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
