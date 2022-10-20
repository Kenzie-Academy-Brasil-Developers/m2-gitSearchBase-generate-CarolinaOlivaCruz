const inputSearch = document.getElementById('input-search')
let inputValue = ''

const userInv = document.getElementById('hidden')
const buttonSearch = document.getElementById('button-search')
const baseUrl = `https://api.github.com/users`
const myHeaders = {
    'Content-Type': 'application/json'
}


function showButton() {
    buttonSearch.addEventListener('click', () => {
        inputValue = inputSearch.value
        getUser(inputValue)
    })
}
showButton()


function getUser(name) {
    fetch(`${baseUrl}/${name}`, {
        method: 'GET',
        headers: myHeaders
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response.name != null || response.name != undefined) {
                window.location.assign('./pages/profile/profile.html')
                localStorage.setItem('userData', JSON.stringify(response));
            } else {
                userInv.classList.toggle('hidden')
            }
        })
        .catch(erro => {
            console.log(erro)
            userInv.classList.toggle('hidden')
        })
}

