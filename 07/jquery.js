// document.querySelector('h1');

$('h1').html('hi');
$('h1').fadeOut().delay(1000).fadeIn();

var $div = $('div');

var $btn = $('#btn');
var $txt = $('#txt');
var $debug = $('#debug');

$div
    // .css('background-color', 'yellow')
    // .css('border', '1px solid red');
// var divs = document.querySelectorAll('div');
// for(var i = 0; i < divs.length; i++) {
//     divs[i].style.backgroundColor = 'red';
// }

$btn.on('click',function(event){
    console.log('click')
    if($txt.val() === ''){
        alert('값을 넣어주세요')
        return;
    }
    $debug.html($txt.val());
});



$('.wrap').on('click', 'div', function(event){
    // console.log(event.target);

    $(event.target).fadeOut();
})