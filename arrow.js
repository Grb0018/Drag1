function a0(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.clientX), y: parseInt(ee.clientY) }
        const carPos = { x: (26*vw), y: (22.2*vw) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        document.getElementsByClassName('ring1')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
       var arrowMove = setInterval(()=>{
        if(parseInt($('.ring1').css('rotate')) < 0.5 && parseInt($('.ring1').css('rotate')) > -2){
            if(parseInt($('.arrow').css('width')) >(22*vw)){
                clearInterval(arrowMove);
                document.body.onmousemove = ()=>{}
                $('.arrow').css('width','23vw')
                $('.ring1').css('rotate','1deg');
                if($('#ringa').attr('a') != 0){
                $('.arrow').css('width','0.5vw')
                $('.ring1').css('rotate','0deg');
                }else{
                    $('#ringa').attr('a',1)
                }
                
            }
        }
        if(parseInt($('.ring1').css('rotate')) < 9 && parseInt($('.ring1').css('rotate')) > 6){
            // console.log(parseInt($('.arrow').css('width'))>(0.18*vw))
             if(parseInt($('.arrow').css('width')) >(22*vw)){
                 clearInterval(arrowMove);
                 document.body.onmousemove = ()=>{}
                 $('.arrow').css('width','23vw')
                $('.ring1').css('rotate','8.6deg')
                if($('#ringb').attr('b') != 0){
                    $('.arrow').css('width','0.5vw')
                    $('.ring1').css('rotate','0deg');
                    }else{
                        $('#ringb').attr('b',1)
                    }
             }
         }
         if(parseInt($('.ring1').css('rotate')) < 17 && parseInt($('.ring1').css('rotate')) > 13.5){
            // console.log(parseInt($('.arrow').css('width'))>(0.18*vw))
             if(parseInt($('.arrow').css('width')) >(22.5*vw)){
                 clearInterval(arrowMove);
                 document.body.onmousemove = ()=>{}
                 $('.arrow').css('width','23.5vw')
                $('.ring1').css('rotate','16deg')
                if($('#ringc').attr('c') != 0){
                    $('.arrow').css('width','0.5vw')
                    $('.ring1').css('rotate','0deg');
                    }else{
                        $('#ringc').attr('c',1)
                    }
             }
         }
         if(parseInt($('.ring1').css('rotate')) < 24 && parseInt($('.ring1').css('rotate')) > 20){
            // console.log(parseInt($('.arrow').css('width'))>(0.18*vw))
             if(parseInt($('.arrow').css('width')) >(24*vw)){
                 clearInterval(arrowMove);
                 document.body.onmousemove = ()=>{}
                 $('.arrow').css('width','25vw')
                 $('.ring1').css('rotate','23.5deg')
                 if($('#ringd').attr('d') != 0){
                    $('.arrow').css('width','0.5vw')
                    $('.ring1').css('rotate','0deg');
                    }else{
                        $('#ringd').attr('d',1)
                    }
             }
         }
         if(parseInt($('.ring1').css('rotate')) < 31 && parseInt($('.ring1').css('rotate')) > 25){
            // console.log(parseInt($('.arrow').css('width'))>(0.18*vw))
             if(parseInt($('.arrow').css('width')) >(25.4*vw)){
                 clearInterval(arrowMove);
                 document.body.onmousemove = ()=>{}
                 $('.arrow').css('width','26.2vw')
                 $('.ring1').css('rotate','30deg')
                 if($('#ringe').attr('e') != 0){
                    $('.arrow').css('width','0.5vw')
                    $('.ring1').css('rotate','0deg');
                    }else{
                        $('#ringe').attr('e',1)
                    }
             }
         }
         if(parseInt($('.ring1').css('rotate')) < 36 && parseInt($('.ring1').css('rotate')) > 32){
            // console.log(parseInt($('.arrow').css('width'))>(0.18*vw))
             if(parseInt($('.arrow').css('width')) >(27*vw)){
                 clearInterval(arrowMove);
                 document.body.onmousemove = ()=>{}
                 $('.arrow').css('width','28vw')
                 $('.ring1').css('rotate','35.5deg')
                 if($('#ringf').attr('f') != 0){
                    $('.arrow').css('width','0.5vw')
                    $('.ring1').css('rotate','0deg');
                    }else{
                        $('#ringf').attr('f',1)
                    }
             }
         }
         if(parseInt($('.ring1').css('rotate')) < 41 && parseInt($('.ring1').css('rotate')) > 38){
            // console.log(parseInt($('.arrow').css('width'))>(0.18*vw))
             if(parseInt($('.arrow').css('width')) >(29*vw)){
                 clearInterval(arrowMove);
                 document.body.onmousemove = ()=>{}
                 $('.arrow').css('width','30.5vw')
                 $('.ring1').css('rotatf','40.5deg')
                 if($('#ringg').attr('g') != 0){
                    $('.arrow').css('width','0.5vw')
                    $('.ring1').css('rotate','0deg');
                    }else{
                        $('#ringg').attr('g',1)
                    }
             }
         }
         if(parseInt($('.ring1').css('rotate')) < 47 && parseInt($('.ring1').css('rotate')) > 43){
            // console.log(parseInt($('.arrow').css('width'))>(0.18*vw))
             if(parseInt($('.arrow').css('width')) >(31*vw)){
                 clearInterval(arrowMove);
                 document.body.onmousemove = ()=>{}
                 $('.arrow').css('width','33vw')
                 $('.ring1').css('rotate','45deg')
                 if($('#ringh').attr('h') != 0){
                    $('.arrow').css('width','0.5vw')
                    $('.ring1').css('rotate','0deg');
                    }else{
                        $('#ringh').attr('h',1)
                    }
             }
         }
       }) 
     }
function a1(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.clientX), y: parseInt(ee.clientY) }
        const carPos = { x: (28*vw), y: (25.4*vw) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        document.getElementsByClassName('ring2')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow2')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
        var arrowMove = setInterval(()=>{
            if(parseInt($('.ring2').css('rotate')) < -5.8 && parseInt($('.ring2').css('rotate')) > -9){
                if(parseInt($('.arrow2').css('width'))/vw >19){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow2').css('width','21vw')
                    $('.ring2').css('rotate','-7deg')
                    if($('#ringa').attr('a') != 0){
                        $('.arrow2').css('width','0.5vw')
                        $('.ring2').css('rotate','0deg');
                        }else{
                            $('#ringa').attr('a',2)
                        }
                }
            }
            if(parseInt($('.ring2').css('rotate')) < 2.2 && parseInt($('.ring2').css('rotate')) > 0){
                if(parseInt($('.arrow2').css('width'))/vw >19){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow2').css('width','20.7vw')
                    $('.ring2').css('rotate','1.8deg')
                    if($('#ringb').attr('b') != 0){
                        $('.arrow2').css('width','0.5vw')
                        $('.ring2').css('rotate','0deg');
                        }else{
                            $('#ringb').attr('b',2)
                        }
                }
            }
            if(parseInt($('.ring2').css('rotate')) < 13 && parseInt($('.ring2').css('rotate')) > 7){
                if(parseInt($('.arrow2').css('width'))/vw >19){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow2').css('width','21vw')
                    $('.ring2').css('rotate','10deg')
                    if($('#ringc').attr('c') != 0){
                        $('.arrow2').css('width','0.5vw')
                        $('.ring2').css('rotate','0deg');
                        }else{
                            $('#ringc').attr('c',2)
                        }
                }
            }
            if(parseInt($('.ring2').css('rotate')) < 20 && parseInt($('.ring2').css('rotate')) > 16){
                if(parseInt($('.arrow2').css('width'))/vw >20){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow2').css('width','22vw')
                    $('.ring2').css('rotate','18.5deg')
                    if($('#ringd').attr('d') != 0){
                        $('.arrow2').css('width','0.5vw')
                        $('.ring2').css('rotate','0deg');
                        }else{
                            $('#ringd').attr('d',2)
                        }
                }
            }
            if(parseInt($('.ring2').css('rotate')) < 28 && parseInt($('.ring2').css('rotate')) > 23){
                if(parseInt($('.arrow2').css('width'))/vw >21){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow2').css('width','23vw')
                    $('.ring2').css('rotate','25.8deg')
                    if($('#ringe').attr('e') != 0){
                        $('.arrow2').css('width','0.5vw')
                        $('.ring2').css('rotate','0deg');
                        }else{
                            $('#ringe').attr('e',2)
                        }
                }
            }
            if(parseInt($('.ring2').css('rotate')) < 35 && parseInt($('.ring2').css('rotate')) > 30){
                if(parseInt($('.arrow2').css('width'))/vw >23){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow2').css('width','25vw')
                    $('.ring2').css('rotate','32.8deg')
                    if($('#ringf').attr('f') != 0){
                        $('.arrow2').css('width','0.5vw')
                        $('.ring2').css('rotate','0deg');
                        }else{
                            $('#ringf').attr('f',2)
                        }
                }
            }
            if(parseInt($('.ring2').css('rotate')) <40 && parseInt($('.ring2').css('rotate')) > 36){
                if(parseInt($('.arrow2').css('width'))/vw >25){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow2').css('width','27vw')
                    $('.ring2').css('rotate','38.5deg')
                    if($('#ringg').attr('g') != 0){
                        $('.arrow2').css('width','0.5vw')
                        $('.ring2').css('rotate','0deg');
                        }else{
                            $('#ringg').attr('g',2)
                        }
                }
            }
            if(parseInt($('.ring2').css('rotate')) < 45 && parseInt($('.ring2').css('rotate')) > 40){
                if(parseInt($('.arrow2').css('width'))/vw >27){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow2').css('width','29vw')
                    $('.ring2').css('rotate','43.5deg')
                    if($('#ringh').attr('h') != 0){
                        $('.arrow2').css('width','0.5vw')
                        $('.ring2').css('rotate','0deg');
                        }else{
                            $('#ringh').attr('h',2)
                        }
                }
            }


})
}
function a2(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.clientX), y: parseInt(ee.clientY) }
        const carPos = { x: (30.5*vw), y: (28.6*vw) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        document.getElementsByClassName('ring3')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow3')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
        var arrowMove = setInterval(()=>{
            if(parseInt($('.ring3').css('rotate')) < -14 && parseInt($('.ring3').css('rotate')) > -18){
                if(parseInt($('.arrow3').css('width'))/vw >19){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow3').css('width','21vw')
                    $('.ring3').css('rotate','-16.87deg')
                    if($('#ringa').attr('a') != 0){
                        $('.arrow3').css('width','0.5vw')
                        $('.ring3').css('rotate','0deg');
                        }else{
                            $('#ringa').attr('a',3)
                        }
                }
            } 
            if(parseInt($('.ring3').css('rotate')) < -4 && parseInt($('.ring3').css('rotate')) > -10){
                if(parseInt($('.arrow3').css('width'))/vw >18){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow3').css('width','20vw')
                    $('.ring3').css('rotate','-8.87deg')
                    if($('#ringb').attr('b') != 0){
                        $('.arrow3').css('width','0.5vw')
                        $('.ring3').css('rotate','0deg');
                        }else{
                            $('#ringb').attr('b',3)
                        }
                }
            }
            if(parseInt($('.ring3').css('rotate')) < 5 && parseInt($('.ring3').css('rotate')) > -2){
                if(parseInt($('.arrow3').css('width'))/vw >16){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow3').css('width','20vw')
                    $('.ring3').css('rotate','0.3deg')
                    if($('#ringc').attr('c') != 0){
                        $('.arrow3').css('width','0.5vw')
                        $('.ring3').css('rotate','0deg');
                        }else{
                            $('#ringc').attr('c',3)
                        }
                }
            }
            if(parseInt($('.ring3').css('rotate')) < 14 && parseInt($('.ring3').css('rotate')) > 7){
                if(parseInt($('.arrow3').css('width'))/vw >18.5){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow3').css('width','20vw')
                    $('.ring3').css('rotate','10deg')
                    if($('#ringd').attr('d') != 0){
                        $('.arrow3').css('width','0.5vw')
                        $('.ring3').css('rotate','0deg');
                        }else{
                            $('#ringd').attr('d',3)
                        }
                }
            }
            if(parseInt($('.ring3').css('rotate')) < 21 && parseInt($('.ring3').css('rotate')) > 15.5){
                if(parseInt($('.arrow3').css('width'))/vw >19){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow3').css('width','21vw')
                    $('.ring3').css('rotate','18deg')
                    if($('#ringe').attr('e') != 0){
                        $('.arrow3').css('width','0.5vw')
                        $('.ring3').css('rotate','0deg');
                        }else{
                            $('#ringe').attr('e',3)
                        }
                }
            }
            if(parseInt($('.ring3').css('rotate')) < 29 && parseInt($('.ring3').css('rotate')) > 23){
                if(parseInt($('.arrow3').css('width'))/vw >20){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow3').css('width','22vw')
                    $('.ring3').css('rotate','26deg')
                    if($('#ringf').attr('f') != 0){
                        $('.arrow3').css('width','0.5vw')
                        $('.ring3').css('rotate','0deg');
                        }else{
                            $('#ringf').attr('f',3)
                        }
                }
            }
            if(parseInt($('.ring3').css('rotate')) < 34 && parseInt($('.ring3').css('rotate')) > 28){
                if(parseInt($('.arrow3').css('width'))/vw >22){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow3').css('width','24vw')
                    $('.ring3').css('rotate','32.6deg')
                    if($('#ringg').attr('g') != 0){
                        $('.arrow3').css('width','0.5vw')
                        $('.ring3').css('rotate','0deg');
                        }else{
                            $('#ringg').attr('g',3)
                        }
                }
            }
            if(parseInt($('.ring3').css('rotate')) < 42 && parseInt($('.ring3').css('rotate')) > 35){
                if(parseInt($('.arrow3').css('width'))/vw >24){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow3').css('width','26vw')
                    $('.ring3').css('rotate','38.4deg')
                    if($('#ringh').attr('h') != 0){
                        $('.arrow3').css('width','0.5vw')
                        $('.ring3').css('rotate','0deg');
                        }else{
                            $('#ringh').attr('h',3)
                        }
                }
            }


})
}
function a3(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.clientX), y: parseInt(ee.clientY) }
        const carPos = { x: (27.5*vw), y: (31.8*vw) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        document.getElementsByClassName('ring4')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow4')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
        var arrowMove = setInterval(()=>{
            if(parseInt($('.ring4').css('rotate')) < -17 && parseInt($('.ring4').css('rotate')) > -25){
                if(parseInt($('.arrow4').css('width'))/vw >21.4){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow4').css('width','23.4vw')
                    $('.ring4').css('rotate','-22.8deg')
                    if($('#ringa').attr('a') != 0){
                        $('.arrow4').css('width','0.5vw')
                        $('.ring4').css('rotate','0deg');
                        }else{
                            $('#ringa').attr('a',4)
                        }
                }
            } 
            if(parseInt($('.ring4').css('rotate')) < -13 && parseInt($('.ring4').css('rotate')) > -18){
                if(parseInt($('.arrow4').css('width'))/vw >21){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow4').css('width','22.2vw')
                    $('.ring4').css('rotate','-16deg')
                    if($('#ringb').attr('b') != 0){
                        $('.arrow4').css('width','0.5vw')
                        $('.ring4').css('rotate','0deg');
                        }else{
                            $('#ringb').attr('b',4)
                        }
                }
            }
            if(parseInt($('.ring4').css('rotate')) < -2 && parseInt($('.ring4').css('rotate')) > -10){
                if(parseInt($('.arrow4').css('width'))/vw >19.5){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow4').css('width','21.5vw')
                    $('.ring4').css('rotate','-8deg')
                    if($('#ringc').attr('c') != 0){
                        $('.arrow4').css('width','0.5vw')
                        $('.ring4').css('rotate','0deg');
                        }else{
                            $('#ringc').attr('c',4)
                        }
                }
            }
            if(parseInt($('.ring4').css('rotate')) < 2.5 && parseInt($('.ring4').css('rotate')) > -2.5){
                if(parseInt($('.arrow4').css('width'))/vw >20){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow4').css('width','21.2vw')
                    $('.ring4').css('rotate','0.6deg')
                    if($('#ringd').attr('d') != 0){
                        $('.arrow4').css('width','0.5vw')
                        $('.ring4').css('rotate','0deg');
                        }else{
                            $('#ringd').attr('d',4)
                        }
                }
            }
            if(parseInt($('.ring4').css('rotate')) < 12 && parseInt($('.ring4').css('rotate')) > 6){
                if(parseInt($('.arrow4').css('width'))/vw >19.5){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow4').css('width','21.5vw')
                    $('.ring4').css('rotate','8.6deg')
                    if($('#ringe').attr('e') != 0){
                        $('.arrow4').css('width','0.5vw')
                        $('.ring4').css('rotate','0deg');
                        }else{
                            $('#ringe').attr('e',4)
                        }
                    
                }
            }
            if(parseInt($('.ring4').css('rotate')) < 19.2 && parseInt($('.ring4').css('rotate')) > 14){
                if(parseInt($('.arrow4').css('width'))/vw >20.5){
                    console.log(parseInt($('.ring4').css('rotate')))
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow4').css('width','22.5vw')
                    $('.ring4').css('rotate','17.2deg')
                    if($('#ringf').attr('f') != 0){
                        $('.arrow4').css('width','0.5vw')
                        $('.ring4').css('rotate','0deg');
                        }else{
                            $('#ringf').attr('f',4)
                        }
                    
                }
            }
            if(parseInt($('.ring4').css('rotate')) < 27 && parseInt($('.ring4').css('rotate')) > 21){
                if(parseInt($('.arrow4').css('width'))/vw >21.5){
                    console.log(parseInt($('.ring4').css('rotate')))
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow4').css('width','23.9vw')
                    $('.ring4').css('rotate','24.5deg')
                    if($('#ringg').attr('g') != 0){
                        $('.arrow4').css('width','0.5vw')
                        $('.ring4').css('rotate','0deg');
                        }else{
                            $('#ringg').attr('g',4)
                        }
                    
                }
            }
            if(parseInt($('.ring4').css('rotate')) < 34 && parseInt($('.ring4').css('rotate')) > 27){
                if(parseInt($('.arrow4').css('width'))/vw >23.4){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow4').css('width','25.5vw')
                    $('.ring4').css('rotate','31.5deg')
                        if($('#ringh').attr('h') != 0){
                            $('.arrow4').css('width','0.5vw')
                            $('.ring4').css('rotate','0deg');
                            }else{
                                $('#ringh').attr('h',4)
                            }
                }
            }
})
}
function a4(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.clientX), y: parseInt(ee.clientY) }
        const carPos = { x: (29.5*vw), y: (35*vw) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        document.getElementsByClassName('ring5')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow5')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
        var arrowMove = setInterval(()=>{
            if(parseInt($('.ring5').css('rotate')) < -29 && parseInt($('.ring5').css('rotate')) > -35){
                if(parseInt($('.arrow5').css('width'))/vw >21){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow5').css('width','23.2vw')
                    $('.ring5').css('rotate','-32.3deg')
                    if($('#ringa').attr('a') != 0){
                        $('.arrow5').css('width','0.5vw')
                        $('.ring5').css('rotate','0deg');
                        }else{
                            $('#ringa').attr('a',5)
                        }
                }
            } 
            if(parseInt($('.ring5').css('rotate')) < -22 && parseInt($('.ring5').css('rotate')) > -27){
                if(parseInt($('.arrow5').css('width'))/vw >19){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow5').css('width','21.5vw')
                    $('.ring5').css('rotate','-25.5deg')
                    if($('#ringb').attr('b') != 0){
                        $('.arrow5').css('width','0.5vw')
                        $('.ring5').css('rotate','0deg');
                        }else{
                            $('#ringb').attr('b',5)
                        }
                }
            }
            if(parseInt($('.ring5').css('rotate')) < -15 && parseInt($('.ring5').css('rotate')) > -19.5){
                if(parseInt($('.arrow5').css('width'))/vw >19){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow5').css('width','20.5vw')
                    $('.ring5').css('rotate','-17.5deg')
                    if($('#ringc').attr('c') != 0){
                        $('.arrow5').css('width','0.5vw')
                        $('.ring5').css('rotate','0deg');
                        }else{
                            $('#ringc').attr('c',5)
                        }
                }
            }
            if(parseInt($('.ring5').css('rotate')) < -6.5 && parseInt($('.ring5').css('rotate')) > -11.5){
                if(parseInt($('.arrow5').css('width'))/vw >17.5){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow5').css('width','19.5vw')
                    $('.ring5').css('rotate','-8.5deg')
                    if($('#ringd').attr('d') != 0){
                        $('.arrow5').css('width','0.5vw')
                        $('.ring5').css('rotate','0deg');
                        }else{
                            $('#ringd').attr('d',5)
                        }
                }
            }
            if(parseInt($('.ring5').css('rotate')) < 1.5 && parseInt($('.ring5').css('rotate')) > -0.8){
                if(parseInt($('.arrow5').css('width'))/vw >17){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow5').css('width','19.5vw')
                    $('.ring5').css('rotate','0deg')
                    if($('#ringe').attr('e') != 0){
                        $('.arrow5').css('width','0.5vw')
                        $('.ring5').css('rotate','0deg');
                        }else{
                            $('#ringe').attr('e',5)
                        }
                }
            }
            if(parseInt($('.ring5').css('rotate')) < 11 && parseInt($('.ring5').css('rotate')) > 7){
                if(parseInt($('.arrow5').css('width'))/vw >17.5){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow5').css('width','19.5vw')
                    $('.ring5').css('rotate','9deg')
                    if($('#ringf').attr('f') != 0){
                        $('.arrow5').css('width','0.5vw')
                        $('.ring5').css('rotate','0deg');
                        }else{
                            $('#ringf').attr('f',5)
                        }
                }
            }
            if(parseInt($('.ring5').css('rotate')) < 21 && parseInt($('.ring5').css('rotate')) > 15){
                if(parseInt($('.arrow5').css('width'))/vw >18.5){
                    console.log(parseInt($('.ring5').css('rotate')))
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow5').css('width','20.5vw')
                    $('.ring5').css('rotate','18.5deg')
                    if($('#ringg').attr('g') != 0){
                        $('.arrow5').css('width','0.5vw')
                        $('.ring5').css('rotate','0deg');
                        }else{
                            $('#ringg').attr('g',5)
                        }
                }
            }
            if(parseInt($('.ring5').css('rotate')) < 28.5 && parseInt($('.ring5').css('rotate')) > 21){
                if(parseInt($('.arrow5').css('width'))/vw >20){
                    console.log('p1')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow5').css('width','22vw')
                    $('.ring5').css('rotate','26.5deg')
                    if($('#ringh').attr('h') != 0){
                        $('.arrow5').css('width','0.5vw')
                        $('.ring5').css('rotate','0deg');
                        }else{
                            $('#ringh').attr('h',5)
                        }
                }
            }
})
}
function a5(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.clientX), y: parseInt(ee.clientY) }
        const carPos = { x: (28.5*vw), y: (38.3*vw) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        document.getElementsByClassName('ring6')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow6')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
        var arrowMove = setInterval(()=>{
            if(parseInt($('.ring6').css('rotate')) < -34 && parseInt($('.ring6').css('rotate')) > -39){
                if(parseInt($('.arrow6').css('width'))/vw >25.8){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow6').css('width','27.8vw')
                    $('.ring6').css('rotate','-36deg')
                    if($('#ringa').attr('a') != 0){
                        $('.arrow6').css('width','0.5vw')
                        $('.ring6').css('rotate','0deg');
                        }else{
                            $('#ringa').attr('a',6)
                        }
                }
            } 
            if(parseInt($('.ring6').css('rotate')) < -28 && parseInt($('.ring6').css('rotate')) > -33){
                if(parseInt($('.arrow6').css('width'))/vw >24){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow6').css('width','26vw')
                    $('.ring6').css('rotate','-30.3deg')
                    if($('#ringb').attr('b') != 0){
                        $('.arrow6').css('width','0.5vw')
                        $('.ring6').css('rotate','0deg');
                        }else{
                            $('#ringb').attr('b',6)
                        }
                }
            }
            if(parseInt($('.ring6').css('rotate')) < -20 && parseInt($('.ring6').css('rotate')) > -25){
                if(parseInt($('.arrow6').css('width'))/vw >22){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow6').css('width','24.4vw')
                    $('.ring6').css('rotate','-23.3deg')
                    if($('#ringc').attr('c') != 0){
                        $('.arrow6').css('width','0.5vw')
                        $('.ring6').css('rotate','0deg');
                        }else{
                            $('#ringc').attr('c',6)
                        }
                }
            }
            if(parseInt($('.ring6').css('rotate')) < -14 && parseInt($('.ring6').css('rotate')) > -18){
                if(parseInt($('.arrow6').css('width'))/vw >21.5){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow6').css('width','23.3vw')
                    $('.ring6').css('rotate','-16.3deg')
                    if($('#ringd').attr('d') != 0){
                        $('.arrow6').css('width','0.5vw')
                        $('.ring6').css('rotate','0deg');
                        }else{
                            $('#ringd').attr('d',6)
                        }
                }
            }
            if(parseInt($('.ring6').css('rotate')) < -7 && parseInt($('.ring6').css('rotate')) > -11){
                if(parseInt($('.arrow6').css('width'))/vw >20){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow6').css('width','22.5vw')
                    $('.ring6').css('rotate','-9deg')
                    if($('#ringe').attr('e') != 0){
                        $('.arrow6').css('width','0.5vw')
                        $('.ring6').css('rotate','0deg');
                        }else{
                            $('#ringe').attr('e',6)
                        }
                }
            }
            if(parseInt($('.ring6').css('rotate')) < 1.5 && parseInt($('.ring6').css('rotate')) > -2){
                if(parseInt($('.arrow6').css('width'))/vw >20){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow6').css('width','22.5vw')
                    $('.ring6').css('rotate','0deg')
                    if($('#ringf').attr('f') != 0){
                        $('.arrow6').css('width','0.5vw')
                        $('.ring6').css('rotate','0deg');
                        }else{
                            $('#ringf').attr('f',6)
                        }
                }
            }
            if(parseInt($('.ring6').css('rotate')) < 9 && parseInt($('.ring6').css('rotate')) > 5){
                if(parseInt($('.arrow6').css('width'))/vw >21){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow6').css('width','22.5vw')
                    $('.ring6').css('rotate','7.3deg')
                    if($('#ringg').attr('g') != 0){
                        $('.arrow6').css('width','0.5vw')
                        $('.ring6').css('rotate','0deg');
                        }else{
                            $('#ringg').attr('g',6)
                        }
                }
            }
            if(parseInt($('.ring6').css('rotate')) < 17 && parseInt($('.ring6').css('rotate')) > 14){
                if(parseInt($('.arrow6').css('width'))/vw >21){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow6').css('width','23.2vw')
                    $('.ring6').css('rotate','15.5deg')
                    if($('#ringh').attr('h') != 0){
                        $('.arrow6').css('width','0.5vw')
                        $('.ring6').css('rotate','0deg');
                        }else{
                            $('#ringh').attr('h',6)
                        }
                }
            }
})
}
function a6(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.clientX), y: parseInt(ee.clientY) }
        const carPos = { x: (31.5*vw), y: (41.3*vw) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        document.getElementsByClassName('ring7')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow7')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
        var arrowMove = setInterval(()=>{
            if(parseInt($('.ring7').css('rotate')) < -44 && parseInt($('.ring7').css('rotate')) > -48.5){
                if(parseInt($('.arrow7').css('width'))/vw >24.5){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow7').css('width','26.5vw')
                    $('.ring7').css('rotate','-47.4deg')
                    if($('#ringa').attr('a') != 0){
                        $('.arrow7').css('width','0.5vw')
                        $('.ring7').css('rotate','0deg');
                        }else{
                            $('#ringa').attr('a',7)
                        }
                }
            } 
            if(parseInt($('.ring7').css('rotate')) < -38 && parseInt($('.ring7').css('rotate')) > -44){
                if(parseInt($('.arrow7').css('width'))/vw >22){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow7').css('width','24vw')
                    $('.ring7').css('rotate','-42deg')
                    if($('#ringb').attr('b') != 0){
                        $('.arrow7').css('width','0.5vw')
                        $('.ring7').css('rotate','0deg');
                        }else{
                            $('#ringb').attr('b',7)
                        }
                }
            } 
            if(parseInt($('.ring7').css('rotate')) < -32 && parseInt($('.ring7').css('rotate')) > -39){
                if(parseInt($('.arrow7').css('width'))/vw >21){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow7').css('width','22vw')
                    $('.ring7').css('rotate','-36deg')
                    if($('#ringc').attr('c') != 0){
                        $('.arrow7').css('width','0.5vw')
                        $('.ring7').css('rotate','0deg');
                        }else{
                            $('#ringc').attr('c',7)
                        }
                }
            }
            if(parseInt($('.ring7').css('rotate')) < -24 && parseInt($('.ring7').css('rotate')) > -30){
                if(parseInt($('.arrow7').css('width'))/vw >18.2){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow7').css('width','20.1vw')
                    $('.ring7').css('rotate','-28.4deg')
                    if($('#ringd').attr('d') != 0){
                        $('.arrow7').css('width','0.5vw')
                        $('.ring7').css('rotate','0deg');
                        }else{
                            $('#ringd').attr('d',7)
                        }
                }
            }
            if(parseInt($('.ring7').css('rotate')) < -17 && parseInt($('.ring7').css('rotate')) > -22){
                if(parseInt($('.arrow7').css('width'))/vw >16.7){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow7').css('width','18.4vw')
                    $('.ring7').css('rotate','-20deg')
                    if($('#ringe').attr('e') != 0){
                        $('.arrow7').css('width','0.5vw')
                        $('.ring7').css('rotate','0deg');
                        }else{
                            $('#ringe').attr('e',7)
                        }
                }
            }
            if(parseInt($('.ring7').css('rotate')) < -8 && parseInt($('.ring7').css('rotate')) > -12){
                if(parseInt($('.arrow7').css('width'))/vw >16){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow7').css('width','17.6vw')
                    $('.ring7').css('rotate','-10deg')
                    if($('#ringf').attr('f') != 0){
                        $('.arrow7').css('width','0.5vw')
                        $('.ring7').css('rotate','0deg');
                        }else{
                            $('#ringf').attr('f',7)
                        }
                }
            }
            if(parseInt($('.ring7').css('rotate')) < 1.5 && parseInt($('.ring7').css('rotate')) > -2){
                if(parseInt($('.arrow7').css('width'))/vw >15.5){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow7').css('width','17.5vw')
                    $('.ring7').css('rotate','0deg')
                    if($('#ringg').attr('g') != 0){
                        $('.arrow7').css('width','0.5vw')
                        $('.ring7').css('rotate','0deg');
                        }else{
                            $('#ringg').attr('g',7)
                        }
                }
            }
            if(parseInt($('.ring7').css('rotate')) < 13 && parseInt($('.ring7').css('rotate')) > 6){
                if(parseInt($('.arrow7').css('width'))/vw >15){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow7').css('width','17.5vw')
                    $('.ring7').css('rotate','10deg')
                    if($('#ringh').attr('h') != 0){
                        $('.arrow7').css('width','0.5vw')
                        $('.ring7').css('rotate','0deg');
                        }else{
                            $('#ringh').attr('h',7)
                        }
                }
            }
})
}
function a7(){
    document.body.onmousemove = (ee)=>{
        const mousePos = { x: parseInt(ee.clientX), y: parseInt(ee.clientY) }
        const carPos = { x: (32.5*vw), y: (44.5*vw) }
        const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
        const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
        document.getElementsByClassName('ring8')[0].style.rotate = angle+'deg';
        document.getElementsByClassName('arrow8')[0].style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
        }
        var arrowMove = setInterval(()=>{
            if(parseInt($('.ring8').css('rotate')) < -51 && parseInt($('.ring8').css('rotate')) > -57){
                if(parseInt($('.arrow8').css('width'))/vw >27.5){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow8').css('width','28.5vw')
                    $('.ring8').css('rotate','-53.2deg')
                    if($('#ringa').attr('a') != 0){
                        $('.arrow8').css('width','0.5vw')
                        $('.ring8').css('rotate','0deg');
                        }else{
                            $('#ringa').attr('a',8)
                        }
                }
            } 
            if(parseInt($('.ring8').css('rotate')) < -46 && parseInt($('.ring8').css('rotate')) > -52){
                if(parseInt($('.arrow8').css('width'))/vw >23){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow8').css('width','25.5vw')
                    $('.ring8').css('rotate','-49deg')
                    if($('#ringb').attr('b') != 0){
                        $('.arrow8').css('width','0.5vw')
                        $('.ring8').css('rotate','0deg');
                        }else{
                            $('#ringb').attr('b',8)
                        }
                }
            } 
            if(parseInt($('.ring8').css('rotate')) < -40 && parseInt($('.ring8').css('rotate')) > -45){
                if(parseInt($('.arrow8').css('width'))/vw >21){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow8').css('width','23.5vw')
                    $('.ring8').css('rotate','-43deg')
                    if($('#ringc').attr('c') != 0){
                        $('.arrow8').css('width','0.5vw')
                        $('.ring8').css('rotate','0deg');
                        }else{
                            $('#ringc').attr('c',8)
                        }
                }
            } 
            if(parseInt($('.ring8').css('rotate')) < -33 && parseInt($('.ring8').css('rotate')) > -40){
                if(parseInt($('.arrow8').css('width'))/vw >20){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow8').css('width','21vw')
                    $('.ring8').css('rotate','-37deg')
                    if($('#ringd').attr('d') != 0){
                        $('.arrow8').css('width','0.5vw')
                        $('.ring8').css('rotate','0deg');
                        }else{
                            $('#ringd').attr('d',8)
                        }
                }
            } 
            if(parseInt($('.ring8').css('rotate')) < -27 && parseInt($('.ring8').css('rotate')) > -33){
                if(parseInt($('.arrow8').css('width'))/vw >17.8){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow8').css('width','19vw')
                    $('.ring8').css('rotate','-30deg')
                    if($('#ringe').attr('e') != 0){
                        $('.arrow8').css('width','0.5vw')
                        $('.ring8').css('rotate','0deg');
                        }else{
                            $('#ringe').attr('e',8)
                        }
                }
            }
            if(parseInt($('.ring8').css('rotate')) < -18 && parseInt($('.ring8').css('rotate')) > -23){
                if(parseInt($('.arrow8').css('width'))/vw >15){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow8').css('width','17.4vw')
                    $('.ring8').css('rotate','-21deg')
                    if($('#ringf').attr('f') != 0){
                        $('.arrow8').css('width','0.5vw')
                        $('.ring8').css('rotate','0deg');
                        }else{
                            $('#ringf').attr('f',8)
                        }
                }
            }
            if(parseInt($('.ring8').css('rotate')) < -10 && parseInt($('.ring8').css('rotate')) > -14){
                if(parseInt($('.arrow8').css('width'))/vw >14.8){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow8').css('width','16.8vw')
                    $('.ring8').css('rotate','-11deg')
                    if($('#ringg').attr('g') != 0){
                        $('.arrow8').css('width','0.5vw')
                        $('.ring8').css('rotate','0deg');
                        }else{
                            $('#ringg').attr('g',8)
                        }
                }
            }
            if(parseInt($('.ring8').css('rotate')) < 3 && parseInt($('.ring8').css('rotate')) > -4){
                if(parseInt($('.arrow8').css('width'))/vw >14.3){
                    console.log('p')
                    clearInterval(arrowMove);
                    document.body.onmousemove = ()=>{}
                    $('.arrow8').css('width','16.3vw')
                    $('.ring8').css('rotate','0deg')
                    if($('#ringh').attr('h') != 0){
                        $('.arrow8').css('width','0.5vw')
                        $('.ring8').css('rotate','0deg');
                        }else{
                            $('#ringh').attr('h',8)
                        }
                }
            }
})
}