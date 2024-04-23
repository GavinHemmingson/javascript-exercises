const palindromes = function (x) 
{
    let string = x;
    string = string.toLowerCase();
    string = string.split("");
    let newString = [];
    let stringRev = [];

    for(let i = 0; i < string.length;i++)
        {
            if (string[i].charCodeAt() >= 48 && string[i].charCodeAt() <= 57 ||
                string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90 ||
                 string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122)
                {
                    newString.push(string[i]);
                }
        }
        
    for(let i = newString.length -1; i >= 0; i--)
        {
            stringRev.push(newString[i])
        }

    for(let i = 0; i < newString.length; i++)
        {
            if(stringRev[i].charCodeAt() != newString[i].charCodeAt())
                {
                    return false
                }
        }

return true
};

// Do not edit below this line
module.exports = palindromes;
