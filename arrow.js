function a0(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.pageX), y: parseInt(ee.pageY) }
        const carPos = { x: (28*vw), y: (18.2*vw)+((screen.availHeight -parseInt($('#container').css('height'))) / 2) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        $('.right1').attr('style','background-image:url(./IMG/btnOrange.png)')
        document.getElementsByClassName('ring1')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow1')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
       var arrowMove = setInterval(()=>{
        if(parseInt($('.ring1').css('rotate')) < 0.5 && parseInt($('.ring1').css('rotate')) > -2){
            lightup('#ringa')
            if(parseInt($('.arrow1').css('width')) >(22*vw)){
                clearInterval(arrowMove);
                if($('#ringa').attr('a') != 0){
                    var aaa = $('#ringa').attr('a')
                $('.arrow'+aaa).css('width','0.5vw')
                $('.ring'+aaa).css('rotate','0deg');
                $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                }
                document.body.onmousemove = ()=>{}
                $('.arrow1').css('width','22vw')
                $('.ring1').css('rotate','1deg');
                $('.right1').attr('style','background-image:url(./IMG/btnDone.png)')
            
                    $('#ringa').attr('a',1)
                
                
            }
        }
        if(parseInt($('.ring1').css('rotate')) < 9 && parseInt($('.ring1').css('rotate')) > 6){
            lightup('#ringb')
            // console.log(parseInt($('.arrow').css('width'))>(0.18*vw))
             if(parseInt($('.arrow1').css('width')) >(22*vw)){
                 clearInterval(arrowMove);
                if($('#ringb').attr('b') != 0){
                    var aaa = $('#ringb').attr('b')
                $('.arrow'+aaa).css('width','0.5vw')
                $('.ring'+aaa).css('rotate','0deg');
                $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                    }
                 document.body.onmousemove = ()=>{}
                 $('.arrow1').css('width','22vw')
                 $('.ring1').css('rotate','8.6deg')
                 $('.right1').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringb').attr('b',1)
             }
         }
         if(parseInt($('.ring1').css('rotate')) < 17 && parseInt($('.ring1').css('rotate')) > 13.5){
            lightup('#ringc')
            // console.log(parseInt($('.arrow').css('width'))>(0.18*vw))
             if(parseInt($('.arrow1').css('width')) >(22.5*vw)){
                 clearInterval(arrowMove);
                if($('#ringc').attr('c') != 0){
                    var aaa = $('#ringc').attr('c')
                $('.arrow'+aaa).css('width','0.5vw')
                $('.ring'+aaa).css('rotate','0deg');
                $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                    }
                 document.body.onmousemove = ()=>{}
                 $('.arrow1').css('width','23vw')
                 $('.ring1').css('rotate','16deg')
                 $('.right1').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringc').attr('c',1)
             }
         }
         if(parseInt($('.ring1').css('rotate')) < 24 && parseInt($('.ring1').css('rotate')) > 20){
            lightup('#ringd')
            // console.log(parseInt($('.arrow').css('width'))>(0.18*vw))
             if(parseInt($('.arrow1').css('width')) >(24*vw)){
                 clearInterval(arrowMove);
                 if($('#ringd').attr('d') != 0){
                    var aaa = $('#ringd').attr('d')
                $('.arrow'+aaa).css('width','0.5vw')
                $('.ring'+aaa).css('rotate','0deg');
                $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                    }
                 document.body.onmousemove = ()=>{}
                 $('.arrow1').css('width','24vw')
                 $('.ring1').css('rotate','23.5deg')
                 $('.right1').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringd').attr('d',1)
                    
             }
         }
         if(parseInt($('.ring1').css('rotate')) < 31 && parseInt($('.ring1').css('rotate')) > 25){
            lightup('#ringe')
            // console.log(parseInt($('.arrow').css('width'))>(0.18*vw))
             if(parseInt($('.arrow1').css('width')) >(25.4*vw)){
                 clearInterval(arrowMove);
                 if($('#ringe').attr('e') != 0){
                    var aaa = $('#ringe').attr('e')
                $('.arrow'+aaa).css('width','0.5vw')
                $('.ring'+aaa).css('rotate','0deg');
                $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                    }
                 document.body.onmousemove = ()=>{}
                 $('.arrow1').css('width','25.7vw')
                 $('.ring1').css('rotate','29deg')
                 $('.right1').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringe').attr('e',1)
             }
         }
         if(parseInt($('.ring1').css('rotate')) < 36 && parseInt($('.ring1').css('rotate')) > 32){
            lightup('#ringf')
            // console.log(parseInt($('.arrow').css('width'))>(0.18*vw))
             if(parseInt($('.arrow1').css('width')) >(27*vw)){
                 clearInterval(arrowMove);
                 if($('#ringf').attr('f') != 0){
                    var aaa = $('#ringf').attr('f')
                $('.arrow'+aaa).css('width','0.5vw')
                $('.ring'+aaa).css('rotate','0deg');
                $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                    }
                 document.body.onmousemove = ()=>{}
                 $('.arrow1').css('width','27.7vw')
                 $('.ring1').css('rotate','35.5deg')
                 $('.right1').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringf').attr('f',1)
             }
         }
         if(parseInt($('.ring1').css('rotate')) < 41 && parseInt($('.ring1').css('rotate')) > 38){
            lightup('#ringg')
            // console.log(parseInt($('.arrow').css('width'))>(0.18*vw))
             if(parseInt($('.arrow1').css('width')) >(29*vw)){
                 clearInterval(arrowMove);
                 if($('#ringg').attr('g') != 0){
                    var aaa = $('#ringg').attr('g')
                $('.arrow'+aaa).css('width','0.5vw')
                $('.ring'+aaa).css('rotate','0deg');
                $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                    }
                 document.body.onmousemove = ()=>{}
                 $('.arrow1').css('width','29.9vw')
                 $('.ring1').css('rotatf','40.5deg')
                 $('.right1').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringg').attr('g',1)
             }
         }
         if(parseInt($('.ring1').css('rotate')) < 47 && parseInt($('.ring1').css('rotate')) > 43){
            lightup('#ringh')
            // console.log(parseInt($('.arrow').css('width'))>(0.18*vw))
             if(parseInt($('.arrow1').css('width')) >(31*vw)){
                 clearInterval(arrowMove);
                 if($('#ringh').attr('h') != 0){
                    var aaa = $('#ringh').attr('h')
                $('.arrow'+aaa).css('width','0.5vw')
                $('.ring'+aaa).css('rotate','0deg');
                $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                    }
                 document.body.onmousemove = ()=>{}
                 $('.arrow1').css('width','32.2vw')
                 $('.ring1').css('rotate','44.5deg')
                 $('.right1').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringh').attr('h',1)
             }
         }
         //else{lightup()}
       }) 
     }
function a1(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.pageX), y: parseInt(ee.pageY) }
        const carPos = { x: (30*vw), y: (21.4*vw)+((screen.availHeight -parseInt($('#container').css('height'))) / 2) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        $('.right2').attr('style','background-image:url(./IMG/btnOrange.png)')
        document.getElementsByClassName('ring2')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow2')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
        var arrowMove = setInterval(()=>{
            if(parseInt($('.ring2').css('rotate')) < -5.8 && parseInt($('.ring2').css('rotate')) > -9){
                lightup('#ringa')
                if(parseInt($('.arrow2').css('width'))/vw >19){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringa').attr('a') != 0){
                        var aaa = $('#ringa').attr('a');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow2').css('width','20.3vw')
                    $('.ring2').css('rotate','-8deg')
                    $('.right2').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringa').attr('a',2)
                }
            }
            if(parseInt($('.ring2').css('rotate')) < 2.2 && parseInt($('.ring2').css('rotate')) > 0){
                lightup('#ringb')
                if(parseInt($('.arrow2').css('width'))/vw >19){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringb').attr('b') != 0){
                        var aaa = $('#ringb').attr('b');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow2').css('width','20vw')
                    $('.ring2').css('rotate','1deg')
                    $('.right2').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringb').attr('b',2)
                }
            }
            if(parseInt($('.ring2').css('rotate')) < 13 && parseInt($('.ring2').css('rotate')) > 7){
                lightup('#ringc')
                if(parseInt($('.arrow2').css('width'))/vw >19){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringc').attr('c') != 0){
                        var aaa = $('#ringc').attr('c');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow2').css('width','20.5vw')
                    $('.ring2').css('rotate','9.8deg')
                    $('.right2').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringc').attr('c',2)
                }
            }
            if(parseInt($('.ring2').css('rotate')) < 20 && parseInt($('.ring2').css('rotate')) > 16){
                lightup('#ringd')
                if(parseInt($('.arrow2').css('width'))/vw >20){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringd').attr('d') != 0){
                        var aaa = $('#ringd').attr('d');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow2').css('width','21.3vw')
                    $('.ring2').css('rotate','18deg')
                    $('.right2').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringd').attr('d',2)
                }
            }
            if(parseInt($('.ring2').css('rotate')) < 28 && parseInt($('.ring2').css('rotate')) > 23){
                lightup('#ringe')
                if(parseInt($('.arrow2').css('width'))/vw >21){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringe').attr('e') != 0){
                        var aaa = $('#ringe').attr('e');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow2').css('width','22.7vw')
                    $('.ring2').css('rotate','25.2deg')
                    $('.right2').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringe').attr('e',2)
                }
            }
            if(parseInt($('.ring2').css('rotate')) < 35 && parseInt($('.ring2').css('rotate')) > 30){
                lightup('#ringf')
                if(parseInt($('.arrow2').css('width'))/vw >23){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringf').attr('f') != 0){
                        var aaa = $('#ringf').attr('f');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow2').css('width','24vw')
                    $('.ring2').css('rotate','31.8deg')
                    $('.right2').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringf').attr('f',2)
                }
            }
            if(parseInt($('.ring2').css('rotate')) <40 && parseInt($('.ring2').css('rotate')) > 36){
                lightup('#ringg')
                if(parseInt($('.arrow2').css('width'))/vw >25){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringg').attr('g') != 0){
                        var aaa = $('#ringg').attr('g');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow2').css('width','26vw')
                    $('.ring2').css('rotate','37.5deg')
                    $('.right2').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringg').attr('g',2)
                }
            }
            if(parseInt($('.ring2').css('rotate')) < 45 && parseInt($('.ring2').css('rotate')) > 40){
                lightup('#ringh')
                if(parseInt($('.arrow2').css('width'))/vw >27){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringh').attr('h') != 0){
                        var aaa = $('#ringh').attr('h');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow2').css('width','28vw')
                    $('.ring2').css('rotate','42.5deg')
                    $('.right2').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringh').attr('h',2)
                }
            }


})
}
function a2(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.pageX), y: parseInt(ee.pageY) }
        const carPos = { x: (32.5*vw), y: (25*vw)+((screen.availHeight -parseInt($('#container').css('height'))) / 2) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        $('.right3').attr('style','background-image:url(./IMG/btnOrange.png)')
        document.getElementsByClassName('ring3')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow3')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
        var arrowMove = setInterval(()=>{
            if(parseInt($('.ring3').css('rotate')) < -14 && parseInt($('.ring3').css('rotate')) > -18){
                lightup('#ringa')
                if(parseInt($('.arrow3').css('width'))/vw >19){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringa').attr('a') != 0){
                        var aaa = $('#ringa').attr('a');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow3').css('width','20vw')
                    $('.ring3').css('rotate','-16.87deg')
                    $('.right3').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringa').attr('a',3)
                }
            } 
            if(parseInt($('.ring3').css('rotate')) < -4 && parseInt($('.ring3').css('rotate')) > -10){
                lightup('#ringb')
                if(parseInt($('.arrow3').css('width'))/vw >18){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringb').attr('b') != 0){
                        var aaa = $('#ringb').attr('b');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow3').css('width','19.35vw')
                    $('.ring3').css('rotate','-8.87deg')
                    $('.right3').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringb').attr('b',3)
                }
            }
            if(parseInt($('.ring3').css('rotate')) < 5 && parseInt($('.ring3').css('rotate')) > -2){
                lightup('#ringc')
                if(parseInt($('.arrow3').css('width'))/vw >16){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringc').attr('c') != 0){
                        var aaa = $('#ringc').attr('c');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow3').css('width','19vw')
                    $('.ring3').css('rotate','0.3deg')
                    $('.right3').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringc').attr('c',3)
                }
            }
            if(parseInt($('.ring3').css('rotate')) < 14 && parseInt($('.ring3').css('rotate')) > 7){
                lightup('#ringd')
                if(parseInt($('.arrow3').css('width'))/vw >18.5){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringd').attr('d') != 0){
                        var aaa = $('#ringd').attr('d');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow3').css('width','19.5vw')
                    $('.ring3').css('rotate','10deg')
                    $('.right3').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringd').attr('d',3)
                }
            }
            if(parseInt($('.ring3').css('rotate')) < 21 && parseInt($('.ring3').css('rotate')) > 15.5){
                lightup('#ringe')
                if(parseInt($('.arrow3').css('width'))/vw >19){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringe').attr('e') != 0){
                        var aaa = $('#ringe').attr('e');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow3').css('width','20.4vw')
                    $('.ring3').css('rotate','18deg')
                    $('.right3').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringe').attr('e',3)
                }
            }
            if(parseInt($('.ring3').css('rotate')) < 29 && parseInt($('.ring3').css('rotate')) > 23){
                lightup('#ringf')
                if(parseInt($('.arrow3').css('width'))/vw >20){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringf').attr('f') != 0){
                        var aaa = $('#ringf').attr('f');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow3').css('width','21.5vw')
                    $('.ring3').css('rotate','26deg')
                    $('.right3').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringf').attr('f',3)
                }
            }
            if(parseInt($('.ring3').css('rotate')) < 34 && parseInt($('.ring3').css('rotate')) > 28){
                lightup('#ringg')
                if(parseInt($('.arrow3').css('width'))/vw >22){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringg').attr('g') != 0){
                        var aaa = $('#ringg').attr('g');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow3').css('width','23.3vw')
                    $('.ring3').css('rotate','32.6deg')
                    $('.right3').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringg').attr('g',3)
                }
            }
            if(parseInt($('.ring3').css('rotate')) < 42 && parseInt($('.ring3').css('rotate')) > 35){
                lightup('#ringh')
                if(parseInt($('.arrow3').css('width'))/vw >24){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringh').attr('h') != 0){
                        var aaa = $('#ringh').attr('h');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow3').css('width','25.3vw')
                    $('.ring3').css('rotate','38.4deg')
                    $('.right3').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringh').attr('h',3)
                }
            }


})
}
function a3(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.pageX), y: parseInt(ee.pageY) }
        const carPos = { x: (29.5*vw), y: (28.5*vw)+((screen.availHeight -parseInt($('#container').css('height'))) / 2) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        $('.right4').attr('style','background-image:url(./IMG/btnOrange.png)')
        document.getElementsByClassName('ring4')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow4')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
        var arrowMove = setInterval(()=>{
            if(parseInt($('.ring4').css('rotate')) < -17 && parseInt($('.ring4').css('rotate')) > -25){
                lightup('#ringa')
                if(parseInt($('.arrow4').css('width'))/vw >21.4){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringa').attr('a') != 0){
                        var aaa = $('#ringa').attr('a');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow4').css('width','22.9vw')
                    $('.ring4').css('rotate','-23.5deg')
                    $('.right4').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringa').attr('a',4)
                }
            } 
            if(parseInt($('.ring4').css('rotate')) < -13 && parseInt($('.ring4').css('rotate')) > -18){
                lightup('#ringb')
                if(parseInt($('.arrow4').css('width'))/vw >21){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringb').attr('b') != 0){
                        var aaa = $('#ringb').attr('b');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow4').css('width','21.6vw')
                    $('.ring4').css('rotate','-16deg')
                    $('.right4').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringb').attr('b',4)
                }
            }
            if(parseInt($('.ring4').css('rotate')) < -2 && parseInt($('.ring4').css('rotate')) > -10){
                lightup('#ringc')
                if(parseInt($('.arrow4').css('width'))/vw >19.5){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringc').attr('c') != 0){
                        var aaa = $('#ringc').attr('c');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow4').css('width','20.9vw')
                    $('.ring4').css('rotate','-8deg')
                    $('.right4').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringc').attr('c',4)
                }
            }
            if(parseInt($('.ring4').css('rotate')) < 2.5 && parseInt($('.ring4').css('rotate')) > -2.5){
                lightup('#ringd')
                if(parseInt($('.arrow4').css('width'))/vw >20){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringd').attr('d') != 0){
                        var aaa = $('#ringd').attr('d');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow4').css('width','20.6vw')
                    $('.ring4').css('rotate','0.6deg')
                    $('.right4').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringd').attr('d',4)
                }
            }
            if(parseInt($('.ring4').css('rotate')) < 12 && parseInt($('.ring4').css('rotate')) > 6){
                lightup('#ringe')
                if(parseInt($('.arrow4').css('width'))/vw >19.5){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringe').attr('e') != 0){
                        var aaa = $('#ringe').attr('e');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow4').css('width','20.8vw')
                    $('.ring4').css('rotate','8.6deg')
                    $('.right4').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringe').attr('e',4)
                    
                }
            }
            if(parseInt($('.ring4').css('rotate')) < 19.2 && parseInt($('.ring4').css('rotate')) > 14){
                lightup('#ringf')
                if(parseInt($('.arrow4').css('width'))/vw >20.5){
                    console.log(parseInt($('.ring4').css('rotate')))
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringf').attr('f') != 0){
                        var aaa = $('#ringf').attr('f');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow4').css('width','21.7vw')
                    $('.ring4').css('rotate','17.2deg')
                    $('.right4').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringf').attr('f',4)
                    
                }
            }
            if(parseInt($('.ring4').css('rotate')) < 27 && parseInt($('.ring4').css('rotate')) > 21){
                lightup('#ringg')
                if(parseInt($('.arrow4').css('width'))/vw >21.5){
                    console.log(parseInt($('.ring4').css('rotate')))
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringg').attr('g') != 0){
                        var aaa = $('#ringg').attr('g');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow4').css('width','22.9vw')
                    $('.ring4').css('rotate','24.5deg')
                    $('.right4').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringg').attr('g',4)
                    
                }
            }
            if(parseInt($('.ring4').css('rotate')) < 34 && parseInt($('.ring4').css('rotate')) > 27){
                lightup('#ringh')
                if(parseInt($('.arrow4').css('width'))/vw >23.4){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                        if($('#ringh').attr('h') != 0){
                            var aaa = $('#ringh').attr('h');
                            $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                            $('.arrow'+aaa).css('width','0.5vw')
                            $('.ring'+aaa).css('rotate','0deg');
                            }
                            $('.arrow4').css('width','24.4vw')
                            $('.ring4').css('rotate','30.6deg')
                            $('.right4').attr('style','background-image:url(./IMG/btnDone.png)')
                                    $('#ringh').attr('h',4)
                }
            }
})
}
function a4(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.pageX), y: parseInt(ee.pageY) }
        const carPos = { x: (31.5*vw), y: (32.3*vw)+((screen.availHeight -parseInt($('#container').css('height'))) / 2) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        $('.right5').attr('style','background-image:url(./IMG/btnOrange.png)')
        document.getElementsByClassName('ring5')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow5')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
        var arrowMove = setInterval(()=>{
            if(parseInt($('.ring5').css('rotate')) < -29 && parseInt($('.ring5').css('rotate')) > -35){
                lightup('#ringa')
                if(parseInt($('.arrow5').css('width'))/vw >21){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringa').attr('a') != 0){
                        var aaa = $('#ringa').attr('a');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow5').css('width','22.8vw')
                    $('.ring5').css('rotate','-33.3deg')
                    $('.right5').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringa').attr('a',5)
                }
            } 
            if(parseInt($('.ring5').css('rotate')) < -22 && parseInt($('.ring5').css('rotate')) > -27){lightup('#ringb')
                if(parseInt($('.arrow5').css('width'))/vw >19){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringb').attr('b') != 0){
                        var aaa = $('#ringb').attr('b');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow5').css('width','21vw')
                    $('.ring5').css('rotate','-26deg')
                    $('.right5').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringb').attr('b',5)
                }
            }
            if(parseInt($('.ring5').css('rotate')) < -15 && parseInt($('.ring5').css('rotate')) > -19.5){lightup('#ringc')
                if(parseInt($('.arrow5').css('width'))/vw >19){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringc').attr('c') != 0){
                        var aaa = $('#ringc').attr('c');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow5').css('width','19.6vw')
                    $('.ring5').css('rotate','-17.5deg')
                    $('.right5').attr('style','background-image:url(./IMG/btnDone.png)')
                    
                        $('#ringc').attr('c',5)
                }
            }
            if(parseInt($('.ring5').css('rotate')) < -6.5 && parseInt($('.ring5').css('rotate')) > -11.5){lightup('#ringd')
                if(parseInt($('.arrow5').css('width'))/vw >17.5){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringd').attr('d') != 0){
                        var aaa = $('#ringd').attr('d');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow5').css('width','18.8vw')
                    $('.ring5').css('rotate','-8.5deg')
                    $('.right5').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringd').attr('d',5)
                }
            }
            if(parseInt($('.ring5').css('rotate')) < 1.5 && parseInt($('.ring5').css('rotate')) > -0.8){lightup('#ringe')
                if(parseInt($('.arrow5').css('width'))/vw >17){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringe').attr('e') != 0){
                        var aaa = $('#ringe').attr('e');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow5').css('width','18.5vw')
                    $('.ring5').css('rotate','0deg')
                    $('.right5').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringe').attr('e',5)
                }
            }
            if(parseInt($('.ring5').css('rotate')) < 11 && parseInt($('.ring5').css('rotate')) > 7){lightup('#ringf')
                if(parseInt($('.arrow5').css('width'))/vw >17.5){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringf').attr('f') != 0){
                        var aaa = $('#ringf').attr('f');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow5').css('width','18.8vw')
                    $('.ring5').css('rotate','9deg')
                    $('.right5').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringf').attr('f',5)
                }
            }
            if(parseInt($('.ring5').css('rotate')) < 21 && parseInt($('.ring5').css('rotate')) > 15){lightup('#ringg')
                if(parseInt($('.arrow5').css('width'))/vw >18.5){
                    console.log(parseInt($('.ring5').css('rotate')))
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringg').attr('g') != 0){
                        var aaa = $('#ringg').attr('g');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow5').css('width','19.6vw')
                    $('.ring5').css('rotate','18.5deg')
                    $('.right5').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringg').attr('g',5)
                }
            }
            if(parseInt($('.ring5').css('rotate')) < 28.5 && parseInt($('.ring5').css('rotate')) > 21){lightup('#ringh')
                if(parseInt($('.arrow5').css('width'))/vw >20){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringh').attr('h') != 0){
                        var aaa = $('#ringh').attr('h');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow5').css('width','21.2vw')
                    $('.ring5').css('rotate','26.5deg')
                    $('.right5').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringh').attr('h',5)
                }
            }
})
}
function a5(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.pageX), y: parseInt(ee.pageY) }
        const carPos = { x: (30.5*vw), y: (35.8*vw)+((screen.availHeight -parseInt($('#container').css('height'))) / 2) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        $('.right6').attr('style','background-image:url(./IMG/btnOrange.png)')
        document.getElementsByClassName('ring6')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow6')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
        var arrowMove = setInterval(()=>{
            if(parseInt($('.ring6').css('rotate')) < -34 && parseInt($('.ring6').css('rotate')) > -39){
                lightup('#ringa')
                if(parseInt($('.arrow6').css('width'))/vw >25.8){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringa').attr('a') != 0){
                        var aaa = $('#ringa').attr('a');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow6').css('width','27.2vw')
                    $('.ring6').css('rotate','-36deg')
                    $('.right6').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringa').attr('a',6)
                }
            } 
            if(parseInt($('.ring6').css('rotate')) < -28 && parseInt($('.ring6').css('rotate')) > -33){lightup('#ringb')
                if(parseInt($('.arrow6').css('width'))/vw >24){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringb').attr('b') != 0){
                        var aaa = $('#ringb').attr('b');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow6').css('width','25.4vw')
                    $('.ring6').css('rotate','-30.3deg')
                    $('.right6').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringb').attr('b',6)
                }
            }
            if(parseInt($('.ring6').css('rotate')) < -20 && parseInt($('.ring6').css('rotate')) > -25){lightup('#ringc')
                if(parseInt($('.arrow6').css('width'))/vw >22){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringc').attr('c') != 0){
                        var aaa = $('#ringc').attr('c');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow6').css('width','23.7vw')
                    $('.ring6').css('rotate','-23.3deg')
                    $('.right6').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringc').attr('c',6)
                }
            }
            if(parseInt($('.ring6').css('rotate')) < -14 && parseInt($('.ring6').css('rotate')) > -18){lightup('#ringd')
                if(parseInt($('.arrow6').css('width'))/vw >21.5){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringd').attr('d') != 0){
                        var aaa = $('#ringd').attr('d');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow6').css('width','22.55vw')
                    $('.ring6').css('rotate','-16.3deg')
                    $('.right6').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringd').attr('d',6)
                }
            }
            if(parseInt($('.ring6').css('rotate')) < -7 && parseInt($('.ring6').css('rotate')) > -11){lightup('#ringe')
                if(parseInt($('.arrow6').css('width'))/vw >20){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringe').attr('e') != 0){
                        var aaa = $('#ringe').attr('e');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow6').css('width','21.9vw')
                    $('.ring6').css('rotate','-9deg')
                    $('.right6').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringe').attr('e',6)
                }
            }
            if(parseInt($('.ring6').css('rotate')) < 1.5 && parseInt($('.ring6').css('rotate')) > -2){lightup('#ringf')
                if(parseInt($('.arrow6').css('width'))/vw >20){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringf').attr('f') != 0){
                        var aaa = $('#ringf').attr('f');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow6').css('width','21.5vw')
                    $('.ring6').css('rotate','0deg')
                    $('.right6').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringf').attr('f',6)
                }
            }
            if(parseInt($('.ring6').css('rotate')) < 9 && parseInt($('.ring6').css('rotate')) > 5){lightup('#ringg')
                if(parseInt($('.arrow6').css('width'))/vw >21){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringg').attr('g') != 0){
                        var aaa = $('#ringg').attr('g');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow6').css('width','21.7vw')
                    $('.ring6').css('rotate','8deg')
                    $('.right6').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringg').attr('g',6)
                }
            }
            if(parseInt($('.ring6').css('rotate')) < 17 && parseInt($('.ring6').css('rotate')) > 14){lightup('#ringh')
                if(parseInt($('.arrow6').css('width'))/vw >21){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringh').attr('h') != 0){
                        var aaa = $('#ringh').attr('h');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow6').css('width','22.6vw')
                    $('.ring6').css('rotate','15.5deg')
                    $('.right6').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringh').attr('h',6)
                }
            }
})
}
function a6(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.pageX), y: parseInt(ee.pageY) }
        const carPos = { x: (33.5*vw), y: (39.3*vw)+((screen.availHeight -parseInt($('#container').css('height'))) / 2) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        $('.right7').attr('style','background-image:url(./IMG/btnOrange.png)')
        document.getElementsByClassName('ring7')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow7')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
        var arrowMove = setInterval(()=>{
            if(parseInt($('.ring7').css('rotate')) < -44 && parseInt($('.ring7').css('rotate')) > -48.5){
                lightup('#ringa')
                if(parseInt($('.arrow7').css('width'))/vw >24.5){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringa').attr('a') != 0){
                        var aaa = $('#ringa').attr('a');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow7').css('width','25.6vw')
                    $('.ring7').css('rotate','-47deg')
                    $('.right7').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringa').attr('a',7)
                }
            } 
            if(parseInt($('.ring7').css('rotate')) < -38 && parseInt($('.ring7').css('rotate')) > -44){lightup('#ringb')
                if(parseInt($('.arrow7').css('width'))/vw >22){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringb').attr('b') != 0){
                        var aaa = $('#ringb').attr('b');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow7').css('width','23.2vw')
                    $('.ring7').css('rotate','-42deg')
                    $('.right7').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringb').attr('b',7)
                }
            } 
            if(parseInt($('.ring7').css('rotate')) < -32 && parseInt($('.ring7').css('rotate')) > -39){lightup('#ringc')
                if(parseInt($('.arrow7').css('width'))/vw >21){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringc').attr('c') != 0){
                        var aaa = $('#ringc').attr('c');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow7').css('width','21.2vw')
                    $('.ring7').css('rotate','-36deg')
                    $('.right7').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringc').attr('c',7)
                }
            }
            if(parseInt($('.ring7').css('rotate')) < -24 && parseInt($('.ring7').css('rotate')) > -30){lightup('#ringd')
                if(parseInt($('.arrow7').css('width'))/vw >18.2){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringd').attr('d') != 0){
                        var aaa = $('#ringd').attr('d');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow7').css('width','19.1vw')
                    $('.ring7').css('rotate','-28.4deg')
                    $('.right7').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringd').attr('d',7)
                }
            }
            if(parseInt($('.ring7').css('rotate')) < -17 && parseInt($('.ring7').css('rotate')) > -22){lightup('#ringe')
                if(parseInt($('.arrow7').css('width'))/vw >16.7){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringe').attr('e') != 0){
                        var aaa = $('#ringe').attr('e');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow7').css('width','17.7vw')
                    $('.ring7').css('rotate','-20deg')
                    $('.right7').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringe').attr('e',7)
                }
            }
            if(parseInt($('.ring7').css('rotate')) < -8 && parseInt($('.ring7').css('rotate')) > -12){lightup('#ringf')
                if(parseInt($('.arrow7').css('width'))/vw >16){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringf').attr('f') != 0){
                        var aaa = $('#ringf').attr('f');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow7').css('width','16.8vw')
                    $('.ring7').css('rotate','-10deg')
                    $('.right7').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringf').attr('f',7)
                }
            }
            if(parseInt($('.ring7').css('rotate')) < 1.5 && parseInt($('.ring7').css('rotate')) > -2){lightup('#ringg')
                if(parseInt($('.arrow7').css('width'))/vw >15.5){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringg').attr('g') != 0){
                        var aaa = $('#ringg').attr('g');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow7').css('width','16.5vw')
                    $('.ring7').css('rotate','0deg')
                    $('.right7').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringg').attr('g',7)
                }
            }
            if(parseInt($('.ring7').css('rotate')) < 13 && parseInt($('.ring7').css('rotate')) > 6){lightup('#ringh')
                if(parseInt($('.arrow7').css('width'))/vw >15){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringh').attr('h') != 0){
                        var aaa = $('#ringh').attr('h');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow7').css('width','17vw')
                    $('.ring7').css('rotate','10deg')
                    $('.right7').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringh').attr('h',7)
                }
            }
})
}
function a7(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.pageX), y: parseInt(ee.pageY) }
        const carPos = { x: (34.5*vw), y: (42.8*vw)+((screen.availHeight -parseInt($('#container').css('height'))) / 2) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        document.getElementsByClassName('ring8')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow8')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
        $('.right8').attr('style','background-image:url(./IMG/btnOrange.png)')
        var arrowMove = setInterval(()=>{
            if(parseInt($('.ring8').css('rotate')) < -51 && parseInt($('.ring8').css('rotate')) > -57){
                lightup('#ringa')
                if(parseInt($('.arrow8').css('width'))/vw >27.5){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringa').attr('a') != 0){
                        var aaa = $('#ringa').attr('a');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow8').css('width','28vw')
                    $('.ring8').css('rotate','-53.2deg')
                    $('.right8').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringa').attr('a',8)
                }
            } 
            if(parseInt($('.ring8').css('rotate')) < -46 && parseInt($('.ring8').css('rotate')) > -52){lightup('#ringb')
                if(parseInt($('.arrow8').css('width'))/vw >23){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringb').attr('b') != 0){
                        var aaa = $('#ringb').attr('b');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow8').css('width','25.2vw')
                    $('.ring8').css('rotate','-49deg')
                    $('.right8').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringb').attr('b',8)
                }
            } 
            if(parseInt($('.ring8').css('rotate')) < -40 && parseInt($('.ring8').css('rotate')) > -45){lightup('#ringc')
                if(parseInt($('.arrow8').css('width'))/vw >21){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringc').attr('c') != 0){
                        var aaa = $('#ringc').attr('c');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow8').css('width','22.4vw')
                    $('.ring8').css('rotate','-43deg')
                    $('.right8').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringc').attr('c',8)
                }
            } 
            if(parseInt($('.ring8').css('rotate')) < -33 && parseInt($('.ring8').css('rotate')) > -40){lightup('#ringd')
                if(parseInt($('.arrow8').css('width'))/vw >20){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringd').attr('d') != 0){
                        var aaa = $('#ringd').attr('d');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow8').css('width','20.3vw')
                    $('.ring8').css('rotate','-37deg')
                    $('.right8').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringd').attr('d',8)
                }
            } 
            if(parseInt($('.ring8').css('rotate')) < -27 && parseInt($('.ring8').css('rotate')) > -33){lightup('#ringe')
                if(parseInt($('.arrow8').css('width'))/vw >17.8){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringe').attr('e') != 0){
                        var aaa = $('#ringe').attr('e');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow8').css('width','18.5vw')
                    $('.ring8').css('rotate','-30deg')
                    $('.right8').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringe').attr('e',8)
                }
            }
            if(parseInt($('.ring8').css('rotate')) < -18 && parseInt($('.ring8').css('rotate')) > -23){lightup('#ringf')
                if(parseInt($('.arrow8').css('width'))/vw >15){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringf').attr('f') != 0){
                        var aaa = $('#ringf').attr('f');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow8').css('width','17vw')
                    $('.ring8').css('rotate','-21deg')
                    $('.right8').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringf').attr('f',8)
                }
            }
            if(parseInt($('.ring8').css('rotate')) < -10 && parseInt($('.ring8').css('rotate')) > -14){lightup('#ringg')
                if(parseInt($('.arrow8').css('width'))/vw >14.8){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringg').attr('g') != 0){
                        var aaa = $('#ringg').attr('g');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow8').css('width','15.8vw')
                    $('.ring8').css('rotate','-11deg')
                    $('.right8').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringg').attr('g',8)
                }
            }
            if(parseInt($('.ring8').css('rotate')) < 3 && parseInt($('.ring8').css('rotate')) > -4){lightup('#ringh')
                if(parseInt($('.arrow8').css('width'))/vw >14.3){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    if($('#ringh').attr('h') != 0){
                        var aaa = $('#ringh').attr('h');
                        $('.right'+aaa).attr('style','background-image:url(./IMG/btnOrange.png)')
                        $('.arrow'+aaa).css('width','0.5vw')
                        $('.ring'+aaa).css('rotate','0deg');
                        }
                    $('.arrow8').css('width','15.6vw')
                    $('.ring8').css('rotate','0deg')
                    $('.right8').attr('style','background-image:url(./IMG/btnDone.png)')
                        $('#ringh').attr('h',8)
                }
            }
})
}
