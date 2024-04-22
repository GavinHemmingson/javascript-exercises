const sumAll = function(x, y) 
{

    if(x >= 0 && typeof x == "number" && typeof y == "number")
    {
        if(x>y)
            {
                let z = x;
                x=y;
                y=z;
            }

        let start = x;
        let answer = 0;
        for(let i = x; i < y+1;i++)
            {
                answer = answer + i;
            }
        return answer
    }
    else 
    return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;
