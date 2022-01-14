let d = document;
let minLength = 2;

function frontValidations ()  {
  const form = d.querySelector(".form-login")
  const $inputs = d.querySelectorAll(".form-login [required]");
  console.log($inputs)

  $inputs.forEach($input => {
    const $span = d.createElement("span")
    $span.id += $input.name;
    $span.textContent = $input.title;
    $span.classList.add('text-danger')
    $span.style.display ='none'
    $span.style.marginTop = '15px'
    $span.style.fontSize = '14px'
    form.insertAdjacentElement("afterbegin",$span)
  });

  d.addEventListener('keyup', (e) => {
    if(e.target.matches(".form-login [required]")){
      let $input = e.target
        pattern = $input.pattern;
        console.log('otro' + $input,pattern)


    if(pattern && $input.value !== ""){
      let regex = new RegExp(pattern)
      return !regex.exec($input.value)
      ?d.getElementById($input.name).style.display='block'
      :d.getElementById($input.name).style.display='none'
    }
  }
  });
}

frontValidations();