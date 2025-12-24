const form = document.getElementById('form')
const namapertama_input = document.getElementById('')
const email_input = document.getElementById('')
const peweh_input = document.getElementById('')
const berulangpeweh_input = document.getElementById('')
const pesan_error = document.getElementById('')

form.addEventListener('submit', (e) => {
    // e.preventDefault()

    let error = []
    if (namapertama_input){
        error = getSignupFormErrors(namapertama_input.value, email_input.value, peweh_input.value, berulangpeweh_input.value)
    }
    else {
        error = getLoginFormErrors(email_input.value, peweh_input.value)
    }

    if (error > 0){
        e.preventDefault()
        pesan_error.innerText = error.join(". ")
    }
})

function getSignupFormErrors(namaPertama, email, password, ulangPassword){
    let error = []

    if(namaPertama === '' || namaPertama === null){
        error.push('Nama pertama dibutuhin')
        namapertama_input.parentElement.classList.add('incorrect')
    }

    if(email === '' || email === null){
        error.push('Email dibutuhin')
        email_input.parentElement.classList.add('incorrect')
    }

    if(password === '' || password === null){
        error.push('Password dibutuhin')
        peweh_input.parentElement.classList.add('incorrect')
    }

    return error;
}
