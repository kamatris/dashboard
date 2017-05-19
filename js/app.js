// var liste = ['guichet_1' , 'guichet_2' , 'guichet_3'];
//
// var eval(liste[1]);
//   liste[1] = [] ;
//   liste[2] = [] ;
// for(var i = 0 ; i<liste.length ; i++){
//   liste[1].push(Math.floor(Math.random(1 , 10) * 100));
//   liste[2].push(Math.floor(Math.random(1 , 10) * 100));
// }
// guichet_1 = [0 , 1 , 14 , 15];
// console.info(eval(liste[1]));
// console.info(eval(liste[2]));


var element = document.getElementById('time');
setInterval(()=>{
  // var r = Math.ceil(Math.random(0 , 255)*100);
  // var g = Math.ceil(Math.random(0 , 255)*100);
  // var b = Math.ceil(Math.random(0 , 255)*100);
  // var code = 'rgb('+r+','+g+','+b+')';
  // element.style.backgroundColor = code;
  var d  = new Date()
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  if(s<10){
    s = '0' + s ;
  }else{
    s = s
  }

  if(s<10){
    m = '0' + m ;
  }else{
    m = m
  }
  element.innerHTML = h + ':' + m + ':' + s
}, 1000);
