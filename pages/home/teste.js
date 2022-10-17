const requestUsersAll = "https://api.github.com/users";
const url = 'http://127.0.0.1:5500/pages/profile/index.html'
const inputSearch = document.getElementById('input-search')
const buttonSearch = document.getElementById('button-search')


function requisicao(api, callback) {
    fetch(api)
        .then((response) => response.json()).then((response) => {

            callback(response)
            console.log(response)
        });

}

function pegarValorInput(array) {
    const urlUser = array.html_url

    buttonSearch.addEventListener('click', () => {
        filter(array)

        const win = window.open(urlUser, '_blank')
            win.focus()
    })

}


function filter(array){
   let arrayNew = []

    if(inputSearch.value != null || inputSearch.value != undefined){
        arrayNew =  array.filter(user => inputSearch.value.toLowerCase() == user.login)
    }

    return arrayNew
}


requisicao(requestUsersAll, pegarValorInput)