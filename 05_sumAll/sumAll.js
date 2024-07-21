const sumAll = function(min, max) {
    let sum = 0;
    
    // Swap if min is greater than max
    if (min > max) {
        [min, max] = [max, min];
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
