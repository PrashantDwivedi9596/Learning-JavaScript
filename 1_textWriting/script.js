let tops = document.querySelectorAll('.text')
tops = Array.from(tops).slice(0, 4).reverse()

let arr = []

let currWord = ''
window.addEventListener('keydown', (e) => {
  if (e.key.length > 1 && e.key !== 'Backspace') return

  if (e.key === 'Backspace') {
    currWord = currWord.slice(0, -1)
  } else if (e.key === ' ') {
    arr.unshift(currWord)
    currWord = ''
    if (arr.length > 3) arr.pop()
  } else {
    currWord += e.key
  }

  updateText()
})

function updateText() {
  for (let i = 0; i < tops.length; i++) {
    if (i === 0 && currWord !== '') {
      tops[i].textContent = currWord
    } else {
      let histIdx = currWord !== '' ? i - 1 : i
      tops[i].textContent = arr[histIdx] || ''
    }
  }
}
