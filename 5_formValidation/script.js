const form = document.querySelector('#form')
const username = document.querySelector('#username')
const password = document.querySelector('#password')

const userNameError = document.querySelector('#usernameError')
const passwordError = document.querySelector('#passwordError')

const userFieldset = document.querySelector('#userFieldset')
const passwordFieldset = document.querySelector('#passwordFieldset')

// Regex patterns declared once outside the validation loop for efficiency
const USERNAME_REGEX = /^[a-zA-Z0-9_]{3,16}$/
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

form.addEventListener('submit', (e) => {
  e.preventDefault()
  validateInputs()
})

function validateInputs() {
  // .trim() removes accidental leading or trailing white spaces
  const usernameValue = username.value.trim()
  const passwordValue = password.value.trim()

  // 1. Reset all errors immediately
  userNameError.textContent = ''
  passwordError.textContent = ''
  userFieldset.classList.remove('error-fieldset')
  passwordFieldset.classList.remove('error-fieldset')

  let isFormValid = true

  // 2. Validate Username
  if (!USERNAME_REGEX.test(usernameValue)) {
    userNameError.textContent =
      'Username must be 3-16 characters (letters, numbers, underscores).'
    userFieldset.classList.add('error-fieldset')
    isFormValid = false
  }

  // 3. Validate Password
  if (!PASSWORD_REGEX.test(passwordValue)) {
    passwordError.textContent =
      'Password must be 8+ characters with uppercase, lowercase, number, and special character.'
    passwordFieldset.classList.add('error-fieldset')
    isFormValid = false
  }

  // 4. Submit logic
  if (isFormValid) {
    console.log('Form submitted successfully!')
    // form.submit(); // Uncomment this line to allow actual backend submission
  }
}
