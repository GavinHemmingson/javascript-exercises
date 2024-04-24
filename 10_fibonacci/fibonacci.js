const fibonacci = function(x) 
{
    let sum = 0;
    let lastNum = 1;
    let beforeNum = 0;
    x  = parseInt(x);
    if(x < 0)
    {
        return "OOPS"
    }
    //0 1 2 3 4 5 6
    //0 1 1 2 3 5 8
    if(x == 1)
        {
            sum = 1;
        }
    for(let i = 1; i < x; i++)
    {
        sum = lastNum + beforeNum
        beforeNum = lastNum
        lastNum = sum
        
    }
    return sum
};

// Do not edit below this line
module.exports = fibonacci;
