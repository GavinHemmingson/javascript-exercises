const repeatString = function(x,y) {
    let string = "";
    if(y < 0)
    {
        return 'ERROR'
    }
    if(y == 0)
    {
        return ''
    }
    else
    {
        for(let i = 0; i < y; i++)
            {
                string = string + x;
            }
        return string;
    }

};

// Do not edit below this line
module.exports = repeatString;
