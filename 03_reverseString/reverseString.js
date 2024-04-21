const reverseString = function(x) {
    let string = x.split("");
    let reverse = [];

    for(let i = x.length -1; i >= 0; i--)
    {
        reverse.push(string[i])
    }

    x = reverse.join("");

    return x


};

// Do not edit below this line
module.exports = reverseString;
