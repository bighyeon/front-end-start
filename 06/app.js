console.log('app');

var appkey = 'da4aeaab9187f8ef34137a29ca6b7468';
var query = '제주대학교';
var url = `https://dapi.kakao.com/v2/search/web?query=${query}`;

var myHeaders = new Headers();
myHeaders.append('Authorization','KakaoAK da4aeaab9187f8ef34137a29ca6b7468');
var options = {
    headers: myHeaders
};




fetch(url, options)
  .then(function(response){
    response.json().then(function(data){
      console.log('json data:',data);
    });
  })