function mode(arr) {
  currentMost = 0;
  numOfTimes = 0;
  output = 0;
  arr.forEach(function(number){
    arr.forEach(function(number2)
    {
      if(number === number2)
      { 
        numOfTimes++;
      }
    });
    if(currentMost < numOfTimes)
      {
        currentMost = numOfTimes;
        output = number;
      }
    numOfTimes = 0;
    });
  return output;
}
console.log(mode([6,2,3,4,9,6,1,0,5,4,7,5,3,9,0,3]))