list = [];
function sortThis(litP)
{
  list.sort(function(a,b)
  {
    if(a=== b)
    {
      return 0;
    }
    else if(a > b)
    {
      return 1;
    }
    else
    {
      return -1;
    }
  })
  return list;
}


module.exports = 
{
  pushAnum:function(num)
  {
    list.push(num);
  },
  listSort: function()
  {
    console.log(sortThis(list));
  },
}


