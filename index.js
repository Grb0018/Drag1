let vw = window.innerWidth/100;
 document.body.onmousedown = (e)=>{
 if(e.target== document.getElementsByClassName('right1')[0]){
   a0();
 }
 if(e.target== document.getElementsByClassName('right2')[0]){
    a1();
  }
  if(e.target== document.getElementsByClassName('right3')[0]){
    a2();
  }
  if(e.target== document.getElementsByClassName('right4')[0]){
    a3();
  }
  if(e.target== document.getElementsByClassName('right5')[0]){
    a4();
  }
  if(e.target== document.getElementsByClassName('right6')[0]){
    a5();
  }
  if(e.target== document.getElementsByClassName('right7')[0]){
    a6();
  }
  if(e.target== document.getElementsByClassName('right8')[0]){
    a7();
  }
 }
 document.body.ontouchstart = (e)=>{
  console.log(e.target)
    if(e.target== document.getElementsByClassName('right1')[0]){
am0()
    }
    if(e.target== document.getElementsByClassName('right2')[0]){
        am1()
            }
            if(e.target== document.getElementsByClassName('right3')[0]){
              am2();
            }
            if(e.target== document.getElementsByClassName('right4')[0]){
              am3();
            }
            if(e.target== document.getElementsByClassName('right5')[0]){
              am4();
            }
            if(e.target== document.getElementsByClassName('right6')[0]){
              am5();
            }
            if(e.target== document.getElementsByClassName('right7')[0]){
              am6();
            }
            if(e.target== document.getElementsByClassName('right8')[0]){
              am7();
            }        
    }
let score=0;   
const qa = [{a:1,b:5,c:8,d:3,e:7,f:2,g:6,h:4}]
document.getElementById('submit').onclick=()=>{
  var alld = document.getElementsByClassName('drop');
  for (let i = 0; i < alld.length; i++) {
    var a = $(alld[i]).attr('id')
     b= a.slice(a.length-1)
    var x = $(alld[i]).attr(b)
    if(x!=0 && x!=1){
      if(x== qa[0][b]){
        $('.arrow'+x).css('background-color','rgb(2 163 59)');
        score++;
      }
      else{
        $('.arrow'+x).css('background-color','darkred')
      }
    }
    else if(x!=0 && x==1){
      if(x== qa[0][b]){$('.arrow1').css('background-color','rgb(2 163 59)');score++}
      else{$('.arrow1').css('background-color','darkred')}
    }
  }
  $('#ans').text(score);
  $('#score').css('display','flex')
  $('#submit').fadeOut()
}
document.getElementById('mobile').onclick=()=>{
  openFullscreen();
  $('#mobile').fadeOut()
  }
document.getElementById('reset').onclick=()=>{
location.reload()
}
var elem = document.body;

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
document.body.onload=()=>{
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.getElementById('mobile').style.display = 'block';
    if(window.innerHeight>window.innerWidth){
        $('#popup1').css({'display':'flex'});
        var a = setInterval(()=>{
          console.log('a')
          if(window.innerHeight<window.innerWidth){document.getElementById('popup1').style.display = 'none';location.reload();clearInterval(a);}
        })
    }
  }else{
    document.getElementById('mobile').style.display = 'none'
  }
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
    $('#mobile').fadeOut()
  }
  if(/iPhone/i.test(navigator.userAgent)){
    $('#logo').css({
      'width': '9vw',
      'top': '3.5vw',
      'right': '1.2vw'
    })
  }
}


function lightup(x){
  var alld = document.getElementsByClassName('drop');
  for (let i = 0; i < alld.length; i++) {
    $(alld[i]).css({'box-shadow':'none'})
  }
  $(x).css({'box-shadow':'0px 0px 20px 3px #ff5722'})
}
