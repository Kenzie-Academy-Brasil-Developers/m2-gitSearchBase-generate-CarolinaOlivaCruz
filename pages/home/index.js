import  {pageUser} from '../profile/profile.js'


const htmlUrl = document.createElement('a')
htmlUrl.innerText = 'http://127.0.0.1:5501/pages/profile/profile.html'
const inputSearch = document.getElementById('input-search')
let inputValue = ''

const buttonSearch = document.getElementById('button-search')
const baseUrl = `https://api.github.com/users`
const myHeaders = {
    'Content-Type': 'application/json'
}


function showButton(){
    buttonSearch.addEventListener('click', () => {
        inputValue = inputSearch.value
        getUser(inputValue)
        const win = window.open(htmlUrl, '_blank')
        return win.focus()
    })
}
showButton()


 function getUser(name){
    fetch(`${baseUrl}/${name}`, {
        method: 'GET',
        headers: myHeaders
    })
    .then(response => response.json())
    .then(response => {
        if(response.name != null || response.name != undefined){
          pageUser(response)
        }
    })
}

