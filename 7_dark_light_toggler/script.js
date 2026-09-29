function setDarkOrLight() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (isDarkMode) {
    document.body.classList.add('dark')
    document.body.classList.remove('light')

    localStorage.setItem('theme', 'dark')
  } else {
    document.body.classList.add('light')
    document.body.classList.remove('dark')

    localStorage.setItem('theme', 'light')
  }
}

const theme = localStorage.getItem('theme')
console.log(theme)
if (!theme) {
  setDarkOrLight()
} else {
  if (theme === 'dark') {
    document.body.classList.add('dark')
    document.body.classList.remove('light')
  } else {
    document.body.classList.add('light')
    document.body.classList.remove('dark')
  }
}

const button = document.querySelector('button')

button.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark')
    document.body.classList.add('light')
    localStorage.setItem('theme', 'light')
  } else {
    document.body.classList.remove('light')
    document.body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
})

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', () => {
    setDarkOrLight()
  })
