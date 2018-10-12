
  
  var submitbutton= document.querySelector('#submit-window');
  var addpage = document.getElementById('addpage');
  
  var page = 1;
  var url = `https://dapi.kakao.com/v2/search/web`
  var myHeaders = new Headers();


  myHeaders.append('Authorization','KakaoAK da4aeaab9187f8ef34137a29ca6b7468');


  var options = {
    headers: myHeaders
  };


function getdata(){
  var query = document.querySelector('#search-window').value;
  
  fetch(url+`?query=${query}&page=${page}`, options)
  .then(function(response){
    response.json().then(function(data){ 
        searched(data);
    });
  })
}


submitbutton.addEventListener('click',function(){
  document.getElementById('searched').innerHTML = '';
  
    getdata();
    
  })




function searched(data){
  
  var str = '';
  
  
  for(var i = 0; i < data.documents.length; i++)
  {
    var title = data.documents[i].title;
    var contents = data.documents[i].contents;
    var datetime = new Date(data.documents[i].datetime);
    var urls = data.documents[i].url;
  
    str += `
            <a id='title' href=${urls} target="_blank">
            <div id = 'searchedlist'>
            <div id = 'titles'>${title}</div>
            <div id = 'contents'>${contents}</div>
            <div id = 'datetime'>${datetime.getFullYear()}년 ${datetime.getMonth()}월 ${datetime.getDay()}일</div>
            </div>
            </a>
            `
    
  }
  document.getElementById('searched').innerHTML += str;
  

}

addpage.addEventListener('click',function(){
  page++;
  getdata();
})

