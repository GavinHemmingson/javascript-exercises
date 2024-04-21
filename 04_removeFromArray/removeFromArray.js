const removeFromArray = function(array, ...args) 
{ let newArray = [];
  for(let nums of args)
    { 
        console.log(nums)

        for(let i = 0; i<array.length;i++)
            {
                if(array[i] === nums)
                  {
                    array.splice(i,1)
                    i--
                  }
                    
                                  
            }
    }

  return array
};

// Do not edit below this line
module.exports = removeFromArray;
