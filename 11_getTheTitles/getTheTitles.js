const getTheTitles = function(x) 
{  
    return x.map(getBookTitle)

};

function getBookTitle(x)
{
    return x.title;
}
// Do not edit below this line
module.exports = getTheTitles;
