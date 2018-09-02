function getCheckDigit(Id)
{
  i = 1;
  checkDigit = 0;
  sum = 0;
  numArray = Id.split("");
  numArray = numArray.reverse();
  console.log(numArray);
  var buffer = 0;
  numArray.forEach(function(numberInArray)
  {
    // console.log("in as " + numberInArray);
    if((i%2)!==0)
    {
      numberInArray = numberInArray * 2;
      if(numberInArray > 10)
      {
        for(i  = 0;i < String(numberInArray).length;i++ )
        {
          buffer = buffer+=Number(String(numberInArray).split("").pop()); 
        }
        numberInArray = buffer;
        
      }
    }
    
    console.log("out as: " + numberInArray)
    sum+=Number(numberInArray);
    i++;
  });
  console.log(sum);
  sum = sum * 9;
  checkDigit = Number(String(sum).split("").pop());
 
  return checkDigit;
}
console.log(getCheckDigit("7992739871"));