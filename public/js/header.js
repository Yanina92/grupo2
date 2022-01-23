let btn = document.getElementById('.nav-burger');
let $display = document.getElementById('.menu-display')

window.onload = function(){
const changeClass = () =>  {
 $display.style.display = 'block'
}
const click = function(e){
  changeClass();
};
console.log('este tiene el button',btn)
console.log('este tiene el button',$display)
}

btn.onclick = click;