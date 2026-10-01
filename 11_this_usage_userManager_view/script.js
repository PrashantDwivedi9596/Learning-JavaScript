let form = document.querySelector('#form')
let userName = document.querySelector('#userName')
let profileImage = document.querySelector('#profileImage')
let email = document.querySelector('#email')
let role = document.querySelector('#role')
let bio = document.querySelector('#bio')
let cardContainer = document.querySelector('.card_container')

let userManager = {
  users: [],

  init: function () {
    form.addEventListener('submit', this.submitForm.bind(this))
    this.renderAllUsers()
  },

  addUser: function () {
    let user = {
      id: Date.now(),
      userName: userName.value.trim(),
      profileImage: profileImage.value.trim(),
      email: email.value.trim(),
      role: role.value.trim(),
      bio: bio.value.trim(),
    }

    this.users.push(user)
    this.createUserCard(user)
  },

  createUserCard: function (user) {
    const card = document.createElement('div')

    card.className =
      'bg-slate-900 border border-slate-800 rounded-2xl ' +
      'overflow-hidden shadow-xl shadow-black/30 ' +
      'transition duration-300 hover:-translate-y-1 ' +
      'hover:border-slate-700 hover:shadow-2xl relative'

    const cardHeader = document.createElement('div')

    cardHeader.className =
      'h-24 bg-gradient-to-r from-indigo-600 ' + 'via-purple-600 to-fuchsia-600'

    card.appendChild(cardHeader)

    const removeBtn = document.createElement('button')

    removeBtn.innerText = '-'
    removeBtn.type = 'button'

    removeBtn.className =
      'absolute top-3 right-3 ' +
      'w-8 h-8 flex items-center justify-center ' +
      'rounded-full bg-black/40 text-white ' +
      'text-xl font-bold hover:bg-red-500 ' +
      'transition duration-200 z-10'

   removeBtn.addEventListener('click', () => {
      this.removeUser(user.id)
    })

    card.appendChild(removeBtn)

    const profileContent = document.createElement('div')

    profileContent.className = 'px-6 pb-6'

    const imageWrapper = document.createElement('div')

    imageWrapper.className = '-mt-12 mb-4'

    const image = document.createElement('img')

    image.src = user.profileImage
    image.alt = `${user.userName}'s profile`

    image.className =
      'w-24 h-24 rounded-full object-cover ' +
      'border-4 border-slate-900 shadow-xl'

    imageWrapper.appendChild(image)
    profileContent.appendChild(imageWrapper)

    const name = document.createElement('h3')

    name.innerText = user.userName
    name.className = 'text-xl font-bold text-white'

    profileContent.appendChild(name)

    const roleElement = document.createElement('p')

    roleElement.innerText = user.role
    roleElement.className = 'text-indigo-400 font-medium text-sm mt-1'

    profileContent.appendChild(roleElement)

    const bioElement = document.createElement('p')

    bioElement.innerText = user.bio
    bioElement.className = 'text-slate-400 text-sm mt-3 leading-relaxed'

    profileContent.appendChild(bioElement)

    const emailContainer = document.createElement('div')

    emailContainer.className = 'mt-5 pt-4 border-t border-slate-800'

    const emailElement = document.createElement('p')

    emailElement.innerText = `✉️ ${user.email}`
    emailElement.className = 'text-sm text-slate-400'

    emailContainer.appendChild(emailElement)
    profileContent.appendChild(emailContainer)

    card.appendChild(profileContent)
    cardContainer.appendChild(card)
  },

  removeUser: function (id) {
    this.users = this.users.filter((user) => user.id !== id)
    this.renderAllUsers()
  },

  getUser: function (id) {
    return this.users.find((user) => user.id === id)
  },

  renderAllUsers: function () {
    cardContainer.innerHTML = ''

    this.users.forEach((user) => {
      this.createUserCard(user)
    })
  },

  submitForm: function (e) {
    e.preventDefault()

    this.addUser()
    form.reset()
  },
}

userManager.init()
