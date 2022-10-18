
 export function pageUser(user) {
  const
    {
      avatar_url,
      name,
      company
    } = user

  const body = document.getElementById('bodyUser')

  const header = document.createElement('header')

  const divUser = document.createElement('div')
  divUser.className = 'content-user'
  const imgUser = document.createElement('img')
  imgUser.src = avatar_url
  const divDate = document.createElement('div')
  divDate.className = 'date-user'
  const h3User = document.createElement('h3')
  h3User.innerText = name
  const pUser = document.createElement('p')
  pUser.innerText = company

  const divButton = document.createElement('div')
  divButton.className = 'content-button-header'
  const buttonEmail = document.createElement('button')
  buttonEmail.innerText = 'Email'
  buttonEmail.className = 'button-header'
  const buttonReturn = document.createElement('button')
  buttonReturn.innerText = 'Trocar de usuário'
  buttonReturn.className = 'button-header'

  const main = document.createElement('main')

  const ulRepository = document.createElement('ul')
  ulRepository.id = 'ulRepository'
  ulRepository.className = 'ulRepository'

  divDate.append(h3User, pUser)
  divUser.append(imgUser, divDate)
  divButton.append(buttonEmail, buttonReturn)
  header.append(divUser, divButton)

  main.appendChild(ulRepository)

  body.append(header, main)

  return body
}


// function listRepository(repository) {

//   const ul = document.getElementById('ulRepository')

//   repository.forEach(element => {

//     const { id, description, html_url } = element

//     const liRepository = document.createElement('li')
//     liRepository.id = id


//     const h4Repository = document.createElement('h4')
//     h4Repository.innerText = description
//     h4Repository.className = 'li-title'
//     const pRepository = document.createElement('p')
//     pRepository.innerText = 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like'
//     pRepository.className = 'li-description'
//     const divRepository = document.createElement('div')
//     divRepository.className = 'content-button-link'
//     const aRepository = document.createElement('a')
//     aRepository.className = 'button-link'
//     aRepository.innerText = 'Repositório'
//     aRepository.href = html_url
//     aRepository.target = '_blank'
//     const aDemo = document.createElement('a')
//     aDemo.className = 'button-link'
//     aDemo.innerText = 'Demo'

//     divRepository.append(aRepository, aDemo)
//     liRepository.append(h4Repository, pRepository, divRepository)
//     ul.appendChild(liRepository)
//   });

// }

// requisicao(requestUser, pageUser)
// requisicao(requestRepository, listRepository)