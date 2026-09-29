const text = document.querySelector('#text')
const progress = document.querySelector('#progress')
const progressBar = document.querySelector('#progress-bar')

const downloadBtn = document.querySelector('#download')
const percentage = document.querySelector('#percent')

let count = 0
let second = 5

let startDwonload = null

downloadBtn.addEventListener('click', (e) => {
  downloadBtn.style.display = 'none'
  progress.style.display = 'initial'
  percentage.style.display = 'initial'

  startDwonload = setInterval(
    () => {
      if (count <= 99) {
        count++
        text.textContent = 'Downloading...'
        progressBar.style.width = `${count}%`
        percentage.textContent = `${count}%`
        console.log(count)
      } else {
        clearInterval(startDwonload)
        text.textContent = 'Downloaded!'
        count = 0
        const alert = document.querySelector('#alert')
        const alertBar = document.querySelector('#alert-progressbar')
        alert.style.display = 'inherit'
        let downloadAlert = setInterval(
          () => {
            if (count++ <= 100) {
              alertBar.style.width = `${count}%`
            } else {
              alert.style.display = 'none'
              clearInterval(downloadAlert)
            }
          },
          (3 * 1000) / 100,
        )
      }
    },
    (10 * 1000) / 100,
  )
})
