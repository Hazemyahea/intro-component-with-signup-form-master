let inputs = document.querySelectorAll('input');
let btnSubmit = document.querySelector('.btn-submit');
let f = document.querySelector('.error_container');
console.log(f)
let errro;
btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault();
    
  inputs.forEach(input => {
    
    if (input.value == 0) {
        let container = document.createElement('div');
        input.classList.add('input_error');
        let  span_error = document.createElement('span');
        span_error.textContent = `${input.placeholder} empty`;
        span_error.classList.add('error');
        container.classList.add('error_container');
         container.appendChild(span_error)
        input.after(container)
     

    console.log()
       
    }else{
        
    }

    if (input.placeholder === 'Email Address') {
       if (!input.value.match(/^[a-z0-9._%+-]+[@][a-z0-9.-]+\.[a-z]{2,4}$/)) {
        input.classList.add('input_error');
        let container = document.createElement('div');
        let span_error = document.createElement('span');
        span_error.textContent = `Looks like this is not email`;
        span_error.classList.add('error');
        container.classList.add('error_container');
         container.appendChild(span_error)
        input.after(container);
        
       }
       
    }
  });
});
