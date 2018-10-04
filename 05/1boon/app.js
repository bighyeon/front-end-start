console.log('1boon');

var url= "https://1boon.kakao.com/ch/enter.json?page=1&pagesize=10";
var b = document.getElementById('b');
var d = 2;  
getUrlData(url, print);



function print(json){
    console.log(json);

    var str = '';
    for(var i =0; i < json.data.length; i++){
        // console.log(json.data[i].title);

        var title = json.data[i].title;
        var path = json.data[i].path;
        str += '<a href="https://1boon.kakao.com/'+path+'" target="_blank">' + title + '</a><br>'

      
    }
    document.getElementById('name').innerHTML += str;
}

   



function getUrlData(url, callback){
     fetch(url)
    .then(function(response){       //완료를 뜻함
        response.json().then(function(data){  //완료가 되면 실행된다.
            // console.log('json data:',data);
            callback(data)    
            });
        })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
}

b.addEventListener('click',function(){
         
    var url1= url.slice(0,-13)
    url1 += d + '&pagesize=10';
    
    getUrlData(url1,print);
    d++

 })     