let d = document;

function frontValidations ()  {
  const form = d.querySelector(".form-show-data-rows")
  console.log(form)
  const $inputs = d.querySelectorAll(".form-show-data-rows [required]");
  console.log($inputs)

  $inputs.forEach($input => {
    const $span = d.createElement("span")
    $span.id += $input.name;
    $span.textContent = $input.title;
    $span.classList.add('text-danger')
    $span.style.display ='none'
    $span.style.fontSize = '14px'
    form.insertAdjacentElement("afterbegin",$span)
  });

  d.addEventListener('keyup', (e) => {
    if(e.target.matches(".form-show-data-rows [required]")){
      let $input = e.target
        pattern = $input.pattern;
        console.log('otro' + $input,pattern)


    if(pattern && $input.value !== ""){
      let regex = new RegExp(pattern)
      return !regex.exec($input.value)
      ?d.getElementById($input.name).style.display='block'
      :d.getElementById($input.name).style.display='none'
    }
    if($input.input-type-text.value <= 2){
      alert('Los campos Descripcion,Nombre y Precio deben tener mas de 2 digitos/letras')
    }
  }
  
  })
 

}

frontValidations();