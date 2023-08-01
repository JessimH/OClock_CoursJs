const ul = document.querySelector('#ul');
const btn = document.querySelector('#btn')
const userName = document.querySelector('#name')
const userAdress = document.querySelector('#adress')

import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

// FETCH ALL USERS WITCH FETCH PROMISE
function getAllUsers() {
  axios.get('http://localhost:3000/users')
    .then((response) => {
      console.log(response.data)
      ul.innerHTML = ''
      if (response.data.length > 0) {
        response.data.forEach((user) => {
          ul.innerHTML += `<li id="${user.id}">
            <div>#${user.id}: ${user.name}:</div> 
            <div>${user.adress}</div>
          </li>`
        })
      } else {
        ul.innerHTML = `<li>No user found</li>`
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

function postUser() {
  const user = {
    name: userName.value,
    adress: userAdress.value
  }

  axios.post('http://localhost:3000/users', user)
    .then((response) => {
      console.log(response.data)
      getAllUsers();
    })
    .catch((err) => {
      console.log(err)
    })

  userName.value = ''
  userAdress.value = ''
}

getAllUsers();


btn.addEventListener('click', postUser)

