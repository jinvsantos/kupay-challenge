class Validator {

    constructor() {
        this.validations = ['data-min-lenght', ]
 }
// iniciar validação dos campos
validate(form) {

    // pegar inputs
    let inputs = form.getElementsByTagName('input');

    //HTMLCollection -> array
    let inputsArray = [...inputs]


    //loop nos inputs, valdação   
    inputsArray.forEach(function(input) {
    //loop em todas a validaçoes existentes
        for(let i = 0; this.validations.length > i; i++) {
            if(input.getAttribute(this.validations[i]) != null) {
                let method = this.validations[i].replace("data-", "").replace("-", "");
               let value = input.getAttribute(this.validations[i])
               this[method](input,value);                
            }
        }    

    }, this);

  }
  minlength(input, minValue) {
      let inputLength = input.value.length

      let errorMensage = 'O campo precisa ter pelo menos caractere'
 

  }

}

let form = document.getElementById("register-form")
let submit = document.getElementById("btn-submit")

let validator = new Validator();

//evento que dispara validação
submit.addEventListener('click', function(e) {

    e.preventDefault();

    validator.validate(form);
})