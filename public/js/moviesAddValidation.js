window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let form = document.querySelector('form')
    let article = document.querySelector('article');
    let inputs = document.querySelectorAll('input')
    let select = document.querySelector('select')
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    let ul = document.querySelector('.errores')
    let regExNumber = /^[0-9]{1,2}$/
    let regExNumber2 = /^[0-9]{2,3}$/

    ul.classList.add('alert-warning')
//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

    inputs[0].focus()
    let error = [false, false, false, false, false, false]
    function errorMessage(message) {
        ul.innerHTML+= `<li>${message}</li>`
    }
    function validar(input, i){
        if (input.value.length <= 0 ) {
            input.classList.add('is-invalid')
            error[i] = true
        } else{
            error[i] = false
        }
    }

    inputs[0].addEventListener('blur' ,()=>{
        if (inputs[0].value.length > 0) {
            inputs[0].classList.remove('is-invalid')
            inputs[0].classList.add('is-valid')
            error[0] = true
        } else {
            errorMessage("El campo Titulo no puede estar vacios")
            error[0] = false
        }
    })
    inputs[1].addEventListener('blur' ,()=>{
        switch (true) {
            case !regExNumber.test(inputs[1].value):
                inputs[1].classList.add('is-invalid')
                error[1] = true
                errorMessage("Ingrese un numero correcto")
                break;
            case inputs[1].value.length <= 0:
                inputs[1].classList.add('is-invalid')
                error[1] = true
                errorMessage("Ingrese un numero")
                break;
            case inputs[1].value > 10 || inputs[1].value < 0:
                inputs[1].classList.add('is-invalid')
                error[1] = true
                errorMessage("Ingrese un numero dentro de 0 y 10")
                break;
            default:
                inputs[1].classList.add('is-valid')
                inputs[1].classList.remove('is-invalid')
                error[1] = false
                break;
        }
    })
    inputs[2].addEventListener('blur' ,()=>{
        switch (true) {
            case !regExNumber.test(inputs[2].value):
                inputs[2].classList.add('is-invalid')
                error[2] = true
                errorMessage("Ingrese un numero correcto")
                break;
            case inputs[2].value.length <= 0:
                inputs[2].classList.add('is-invalid')
                error[2] = true
                errorMessage("Ingrese un numero")
                break;
            case inputs[2].value > 10 || inputs[2].value < 0:
                inputs[2].classList.add('is-invalid')
                error[2] = true
                errorMessage("Ingrese un numero dentro de 0 y 10")
                break;
            default:
                inputs[2].classList.remove('is-invalid')
                inputs[2].classList.add('is-valid')
                error[2] = false
                break;
        }
    })
    inputs[3].addEventListener('blur' ,()=>{
        if (inputs[3].value.length > 0) {
            inputs[3].classList.remove('is-invalid')
            inputs[3].classList.add('is-valid')
            error[3] = true
        } else{
            errorMessage("Ingrese una fecha")
            error[3] = false
        }
    })
    inputs[4].addEventListener('blur' ,()=>{
        switch (true) {
            case !regExNumber2.test(inputs[4].value):
                inputs[4].classList.add('is-invalid')
                error[4] = true
                errorMessage("Ingrese un numero correcto")
                break;
            case inputs[4].value.length <= 0:
                inputs[4].classList.add('is-invalid')
                error[4] = true
                errorMessage("Ingrese un numero")
                break;
            case inputs[4].value > 360 || inputs[4].value < 60:
                inputs[4].classList.add('is-invalid')
                error[4] = true
                errorMessage("Ingrese un numero dentro de 60 y 360")
                break;
            default:
                inputs[4].classList.remove('is-invalid')
                inputs[4].classList.add('is-valid')
                error[4] = false
                break;
        }
    })
    select.addEventListener('blur' ,()=>{
        if (select.value.length > 0) {
            select.classList.remove('is-invalid')
            select.classList.add('is-valid')
            error[5] = true
        } else {
            errorMessage("seleccione una opcion")
            error[5] = false
        }
    })



    formulario.addEventListener('submit', (e)=>{
        e.preventDefault()
        inputs.forEach((input, i)=>{
            validar(input, i)
        })
        validar(select, 5)

        
        if (!error.includes(true)) {
            form.submit()
        } else {
            errorMessage("Complete los campos vacios")
        }
        
        
    })
}