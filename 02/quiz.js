for(var i = 1; i <=100; i++)
{
    console.log(i);
}



for(var i = 1; i <= 100; i++)
{
    if(i % 2 == 0)
    {
        console.log("짝수"+ i)
        
    }
    if(i % 2 !== 0)
    {
        console.log("홀수"+ i)
    }
}

for(var i = 1; i <= 9; i++)
{
    for(j = 1; j <= 9; j++)
    {
        
       console.log(i + '*' + j + '=' + i*j)
    }
}
