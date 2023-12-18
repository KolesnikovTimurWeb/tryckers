let registerBLock = document.querySelector('.register-block')
let loginBLock = document.querySelector('.login-container')
let globalBlock = document.querySelector('.global')
let buttonRegister = document.querySelector('.button-register')
let buttonLogin = document.querySelector('.register-back')

let inputs = document.querySelectorAll('input')

buttonRegister.addEventListener('click', function () {
   loginBLock.classList.remove('active')
   registerBLock.classList.add('active')
})
buttonLogin.addEventListener('click', function () {
   loginBLock.classList.add('active')
   registerBLock.classList.remove('active')
})

registerBLock.addEventListener('submit', function (ev) {
   ev.preventDefault()
   let login = registerBLock.querySelector('input[name="login"]')
   let password = registerBLock.querySelector('input[name="password"]')

   localStorage.setItem('login', login.value)
   localStorage.setItem('password', password.value)

   registerBLock.classList.remove('active')
   globalBlock.classList.add('active')
})

loginBLock.addEventListener('submit', function (ev) {
   ev.preventDefault()

   let login = localStorage.getItem('login')
   let password = localStorage.getItem('password')
   let loginCheck = loginBLock.querySelector('input[name="login"]')
   let passworCheck = loginBLock.querySelector('input[name="password"]')
   let error = loginBLock.querySelector('.error-form')
   let logo = document.querySelector('.logo')


   if (loginCheck.value !== login) {
      console.log('error')
      error.classList.add('active')
      return
   } else {
      error.classList.remove('active')
      console.log('true')
   }
   if (passworCheck.value !== password) {
      console.log('error')
      error.classList.add('active')
      return
   } else {
      error.classList.remove('active')
      console.log('true')
   }
   loginBLock.classList.remove('active')
   globalBlock.classList.add('active')
})



inputs.forEach(el => {
   el.addEventListener('change', function () {
      console.log(el.classList.value.includes('input'))
      if (el.classList.value.includes('weight-vehichal')) {
         localStorage.setItem('weight-vehichal', el.value)
      }
      if (el.classList.value.includes('lenght-vehichal')) {
         localStorage.setItem('lenght-vehichal', el.value)
      }
      if (el.classList.value.includes('height-vehichal')) {
         localStorage.setItem('height-vehichal', el.value)
      }
      if (el.classList.value.includes('width-vehichal')) {
         localStorage.setItem('width-vehichal', el.value)
      }
      if (el.classList.value.includes('name-track-vehichal')) {
         localStorage.setItem('name-track-vehichal', el.value)
      }
      if (el.classList.value.includes('fullname-vehichal')) {
         localStorage.setItem('fullname-vehichal', el.value)
      }
      if (el.classList.value.includes('country-vehichal')) {
         localStorage.setItem('country-vehichal', el.value)
      }
      if (el.classList.value.includes('city-vehichal')) {
         localStorage.setItem('city-vehichal', el.value)
      }
      if (el.classList.value.includes("raon-vehichal")) {
         localStorage.setItem("raon-vehichal", el.value)
      }
      if (el.classList.value.includes("house-vehichal")) {
         localStorage.setItem("house-vehichal", el.value)
      }
      if (el.classList.value.includes("numberhouse-vehichal")) {
         localStorage.setItem("numberhouse-vehichal", el.value)
      }
      if (el.classList.value.includes("email-vehichal")) {
         localStorage.setItem("email-vehichal", el.value)
      }
      if (el.classList.value.includes("name-vehichal")) {
         localStorage.setItem("name-vehichal", el.value)
      }
      if (el.classList.value.includes("markcar-vehichal")) {
         localStorage.setItem("markcar-vehichal", el.value)
      }
      if (el.classList.value.includes("modelcar-vehichal")) {
         localStorage.setItem("modelcar-vehichal", el.value)
      }
      if (el.classList.value.includes("tel-vehichal")) {
         localStorage.setItem("tel-vehichal", el.value)
      }
      if (el.classList.value.includes("statusllow-vehichal")) {
         localStorage.setItem("statusllow-vehichal", el.value)
      }
      if (el.classList.value.includes("organ-vehichal")) {
         localStorage.setItem("organ-vehichal", el.value)
      }
      if (el.classList.value.includes("date-vehichal")) {
         localStorage.setItem("date-vehichal", el.value)
      }
      if (el.classList.value.includes("allownumber-vehichal")) {
         localStorage.setItem("allownumber-vehichal", el.value)
      }
      if (el.classList.value.includes("map-x-1")) {
         localStorage.setItem("map-x-1", el.value)
      }
      if (el.classList.value.includes("map-x-2")) {
         localStorage.setItem("map-x-2", el.value)
      }
      if (el.classList.value.includes("map-x-3")) {
         localStorage.setItem("map-x-3", el.value)
      }
      if (el.classList.value.includes("map-x-4")) {
         localStorage.setItem("map-x-4", el.value)
      }
      if (el.classList.value.includes("map-x-5")) {
         localStorage.setItem("map-x-5", el.value)
      }
      if (el.classList.value.includes("map-x-6")) {
         localStorage.setItem("map-x-6", el.value)
      }
      if (el.classList.value.includes("map-y-1")) {
         localStorage.setItem("map-y-1", el.value)
      }
      if (el.classList.value.includes("map-y-2")) {
         localStorage.setItem("map-y-2", el.value)
      }
      if (el.classList.value.includes("map-y-3")) {
         localStorage.setItem("map-y-3", el.value)
      }
      if (el.classList.value.includes("map-y-4")) {
         localStorage.setItem("map-y-4", el.value)
      }
      if (el.classList.value.includes("map-y-5")) {
         localStorage.setItem("map-y-5", el.value)
      }
      if (el.classList.value.includes("map-y-6")) {
         localStorage.setItem("map-y-6", el.value)
      }
      if (el.classList.value.includes("name-city-1")) {
         localStorage.setItem("name-city-1", el.value)
      }
      if (el.classList.value.includes("name-city-2")) {
         localStorage.setItem("name-city-2", el.value)
      }
      if (el.classList.value.includes("name-city-3")) {
         localStorage.setItem("name-city-3", el.value)
      }
      if (el.classList.value.includes("start-date-vehichal")) {
         localStorage.setItem("start-date-vehichal", el.value)
      }
      if (el.classList.value.includes("finish-date-vehichal")) {
         localStorage.setItem("finish-date-vehichal", el.value)
      }
      if (el.classList.value.includes("counttrips-vehichal")) {
         localStorage.setItem("counttrips-vehichal", el.value)
      }
      if (el.classList.value.includes("type-of-truck-vehichal")) {
         localStorage.setItem("type-of-truck-vehichal", el.value)
      }
      if (el.classList.value.includes("vehichal-1-vehichal")) {
         localStorage.setItem("vehichal-1-vehichal", el.value)
      }
      if (el.classList.value.includes("vehichal-2-vehichal")) {
         localStorage.setItem("vehichal-2-vehichal", el.value)
      }
      if (el.classList.value.includes("vehichal-3-vehichal")) {
         localStorage.setItem("vehichal-3-vehichal", el.value)
      }
      if (el.classList.value.includes("vehichal-4-vehichal")) {
         localStorage.setItem("vehichal-4-vehichal", el.value)
      }
      if (el.classList.value.includes("vehichal-5-vehichal")) {
         localStorage.setItem("vehichal-5-vehichal", el.value)
      }
      if (el.classList.value.includes("vehichal-6-vehichal")) {
         localStorage.setItem("vehichal-6-vehichal", el.value)
      }
      if (el.classList.value.includes("vehichal-7-vehichal")) {
         localStorage.setItem("vehichal-7-vehichal", el.value)
      }

      if (el.classList.value.includes("number-picture-1")) {
         localStorage.setItem("number-picture-1", el.value)
      }
      if (el.classList.value.includes("number-picture-2")) {
         localStorage.setItem("number-picture-2", el.value)
      }
      if (el.classList.value.includes("number-picture-3")) {
         localStorage.setItem("number-picture-3", el.value)
      }
      if (el.classList.value.includes("number-picture-4")) {
         localStorage.setItem("number-picture-4", el.value)
      }
      if (el.classList.value.includes("number-picture-5")) {
         localStorage.setItem("number-picture-5", el.value)
      }
      if (el.classList.value.includes("number-picture-6")) {
         localStorage.setItem("number-picture-6", el.value)
      }
      if (el.classList.value.includes("number-picture-7")) {
         localStorage.setItem("number-picture-7", el.value)
      }
      if (el.classList.value.includes("number-picture-8")) {
         localStorage.setItem("number-picture-8", el.value)
      }
      if (el.classList.value.includes("number-picture-9")) {
         localStorage.setItem("number-picture-9", el.value)
      }
      if (el.classList.value.includes("number-picture-10")) {
         localStorage.setItem("number-picture-10", el.value)
      }
      if (el.classList.value.includes("number-picture-11")) {
         localStorage.setItem("number-picture-11", el.value)
      }
      if (el.classList.value.includes("number-picture-12")) {
         localStorage.setItem("number-picture-12", el.value)
      }
      if (el.classList.value.includes("number-picture-13")) {
         localStorage.setItem("number-picture-13", el.value)
      }
      if (el.classList.value.includes("number-picture-14")) {
         localStorage.setItem("number-picture-14", el.value)
      }
      if (el.classList.value.includes("number-picture-15")) {
         localStorage.setItem("number-picture-15", el.value)
      }
      if (el.classList.value.includes("number-picture-16")) {
         localStorage.setItem("number-picture-16", el.value)
      }
      if (el.classList.value.includes("number-picture-17")) {
         localStorage.setItem("number-picture-17", el.value)
      }
      if (el.classList.value.includes("number-picture-18")) {
         localStorage.setItem("number-picture-18", el.value)
      }
      if (el.classList.value.includes("number-picture-19")) {
         localStorage.setItem("number-picture-19", el.value)
      }
      if (el.classList.value.includes("number-picture-20")) {
         localStorage.setItem("number-picture-20", el.value)
      }
   })
})