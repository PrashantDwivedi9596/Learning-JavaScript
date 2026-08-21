let btn = document.querySelector('#button')
let inp = document.querySelector('#inp')

btn.addEventListener('click', (e) => {
  inp.click()
})

inp.addEventListener('change', (e) => {
  let file = e.target?.files[0]?.name
  if (file) {
    btn.textContent = file
    console.dir(e.target)
  }
})
