// const requestUsersAll = "https://api.github.com/users";
// const url = 'http://127.0.0.1:5500/pages/profile/index.html'
// const inputSearch = document.getElementById('input-search')
// const buttonSearch = document.getElementById('button-search')


// function requisicao(api, callback) {
//     fetch(api)
//         .then((response) => response.json()).then((response) => {
//             callback(response)

//             console.log(response)
//         });
// }


// function arrayUsers(array) {
//     if(inputSearch.value != undefined || inputSearch.value != null){
        
//     }
//     array.forEach((element) => {
//       let verifyIfContainsObject = element.login.toLowerCase().includes(inputSearch.value.toLowerCase());
//         if (verifyIfContainsObject) {
//             buttonClickPage(element.html_url)
//         }
//         console.log(element.login)
//     });

// }


// function buttonClickPage(url){

//     if(inputSearch.value != undefined || inputSearch.value != null){
//         buttonSearch.addEventListener('click', () => {
//             openPageUser(url)
//         })
//     }
// }

// function openPageUser(url) {
//     const win = window.open(url, '_blank')
//     // win.focus()
// }


// // function filter(arrayObj){

// //     const 


// // }

// requisicao(requestUsersAll, arrayUsers)
