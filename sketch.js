var arr =[1,2,3,4,5,6,7,8,9,10];

function find_num(arr,x)
{
  for (var i = 0;i < arr.length;i+=2 ) {
    if (arr[i]>=x) {
      console.log(arr[i])
    }
    
    
  }
}
function setup() 
{
  createCanvas(400, 400);
  find_num(arr,6)
}

function draw() 
{
   background(220);
  
}