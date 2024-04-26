const findTheOldest = function(x) 
{
    let oldest = ""
    let oldestAge = 0;
    findAge(x)
    console.log(x)
    for(let i = 0; i < x.length -1; i++)
        {
            
            if(x[i].Age > oldestAge)
                {
                    oldestAge = x[i].Age;
                    oldest = x[i];
                    console.log(oldest)
                }
        }
        console.log(oldest)
    return oldest;
    // for(let i = 0; i < x.length -1; i++)
    // {
    //     if(x[i].Age > oldestAge)
    //         { 
    //             oldestAge = x[i].Age;
    //         }
    // }
    // for(let i = 0; i < x.length -1; i++)
    // {
    //     if(x[i].Age == oldestAge)
    //         {
    //             return x[i].name;
    //         }
    // }

};
let Age = 0;
function findAge(dates)
{
    for(let i = 0; i < dates.length; i++)
    {
        
        let currentDate = new Date();
        
        if(!dates[i].yearOfDeath)
        {
            Age = currentDate.getFullYear() - dates[i].yearOfBirth;
            dates[i].Age = Age;
        }
        else
            {
                Age = dates[i].yearOfDeath - dates[i].yearOfBirth;
                dates[i].Age = Age;
            }
        
    }
}
// Do not edit below this line
module.exports = findTheOldest;
