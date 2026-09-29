const form = document.querySelector('#card-form')
const fileInput = document.querySelector('#file-input')
const uploadBtn = document.querySelector('#upload-img')
const imgText = document.querySelector('#profile-img-text')
const cardsContainer = document.querySelector('#cards-container')

// Trigger hidden file input when clicking custom upload box
uploadBtn.addEventListener('click', () => fileInput.click())

// Display file name when chosen
fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    imgText.textContent = fileInput.files[0].name
  } else {
    imgText.textContent = 'No file chosen'
  }
})

// Form submit listener
form.addEventListener('submit', (e) => {
  e.preventDefault()

  const name = form.elements['name'].value.trim()
  const occupation = form.elements['occupation'].value.trim()
  const description = form.elements['description'].value.trim()
  const urlInput = form.elements['profile-img-link'].value.trim()

  // Prioritize URL, fallback to uploaded file
  let imageSrc = ''
  if (urlInput !== '') {
    imageSrc = urlInput
  } else if (fileInput.files && fileInput.files[0]) {
    imageSrc = URL.createObjectURL(fileInput.files[0])
  } else {
    imageSrc = 'https://via.placeholder.com/150'
  }

  // Create card DOM element
  const card = document.createElement('div')
  card.className = 'card'
  card.innerHTML = `
    <img src="${imageSrc}" alt="${name}" />
    <h3>${name}</h3>
    <h4>${occupation}</h4>
    <p>${description}</p>
  `

  cardsContainer.append(card)

  // Reset form and UI
  form.reset()
  imgText.textContent = 'No file chosen'
})


