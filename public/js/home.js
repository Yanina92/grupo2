// const btn = document.getElementById('button-home');
// const article = document.getElementById('offer-1');
// const article2 = document.getElementById('offer-2');
// const changeClass = () =>  {
//   article.classList.toggle("products-off-OFF");
//   article2.classList.toggle("products-off-ON");
// }
// const click = function(e){
//   changeClass();
// };

// console.log('este tiene el button',btn)


// btn.onclick = click;

let btn = document.getElementById('.material-icons');
let $display = document.getElementById('.menu-display')

const changeClass = () =>  {
 $display.style.display = 'block'
}
const click = function(e){
  changeClass();
};
console.log('este tiene el button',btn)
console.log('este tiene el button',$display)

btn.onclick = click;