var wrap = document.querySelector('.wrap');


var str= '';
for(var i = 0; i < 4; i++){
    for(var j = 0; j <4; j++)
    {  
        if( i % 2 == 0 )
            str += '<div class="b"></div>';  
    }
}


wrap.innerHTML = str;