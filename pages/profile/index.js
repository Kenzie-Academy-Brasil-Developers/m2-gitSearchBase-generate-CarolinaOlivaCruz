
function requisicao() {
  fetch("https://api.github.com/users/carolinaolivacruz")
    .then((response) => response.json()).then((response) => {
      // console.log(response)
      pageUser(response)
    });
}




function pageUser(user) {

  const body = document.getElementById('bodyUser')

  const header = document.createElement('header')

  const divheader = document.createElement('div')

  const imgUser = document.createElement('img')
  imgUser.src = user.avatar_url

  const divUser = document.createElement('div')
  const h3User = document.createElement('h3')
  h3User.innerText = user.name
  const pUser = document.createElement('p')
  pUser.innerText = user.company

  const divButton = document.createElement('div')
  const buttonEmail = document.createElement('button')
  buttonEmail.innerText = 'Email'
  const buttonReturn = document.createElement('button')
  buttonReturn.innerText = 'Trocar de usuário'

  const main = document.createElement('main')

  const ulRepository = document.createElement('ul')
  
  const repository = user.repos_url
  console.log(repository)

  repository.forEach(element => {
    
    const repositoryId = element.id
    console.log(repositoryId)

    const liRepository = document.createElement('li')

    const h4Repository = document.createElement('h4')
    h4Repository.innerText = ''
    const pRepository = document.createElement('p')
    const divRepository = document.createElement('div')
    const buttonRepository = document.createElement('h4')
    const h4Demo = document.createElement('h4')


    divRepository.append(buttonRepository, h4Demo)
    liRepository.append(h4Repository, pRepository, divRepository)
    ulRepository.appendChild(liRepository)
  });


  divUser.append(h3User, pUser)
  divButton.append(buttonEmail, buttonReturn)
  divheader.append(imgUser, divUser, divButton)
  header.appendChild(divheader)

  main.appendChild(ulRepository)

  body.append(header, main)

  return body
}

requisicao()