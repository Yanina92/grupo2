window.addEventListener('load', function() {
  const $btn = [document.getElementById('burger-btn'),document.getElementById('display-burger')];
  let $menu = document.getElementById('display-burger');
  let $items = document.querySelectorAll('.item-burger')

  function itemsClose() {
    if ($menu.classList.contains("showMenu")) {
      $menu.classList.toggle("menu-display");
    }
  }
  $items.forEach(element => {
    element.onclick = itemsClose; 
  })
   

function toggleMenu() {
  if ($menu.classList.contains("showMenu")) {
    $menu.classList.toggle("menu-display");
    // $menu.classList.add("menu-display");

    // closeIcon.style.display = "none";
    $btn.classList.remove("cutButton");
  } else {
    $menu.classList.toggle("showMenu");
    // $menu.classList.remove("menu-display");

    // closeIcon.style.display = "block";
    $btn.classList.add("cutButton");
  }
}
  console.log('este tiene el button',)
  
  
  function burgerDisplay() {
  
  $btn.forEach(element => {
    
  element.onclick = toggleMenu;
  })
}
  
 burgerDisplay(); 
  });

