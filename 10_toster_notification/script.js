function createToaster(config) {
  return function (msg) {
    let div = document.createElement('div')

    div.className = `inline-block ${config.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} px-6 py-3 rounded shadow-lg pointer-events-none `

    // ${config.positionX === 'right' ? 'right-10' : 'left-10'} ${config.positionY === 'top' ? 'top-10' : 'bottom-10'}
    div.textContent = msg
    let tosterContainer = document.querySelector('#tosterContainer')

    if (config.positionX !== 'left' || config.positionY !== 'bottom') {
      tosterContainer.className += `${config.positionX !== 'left' ? ' right-5' : ' top-5'} ${config.positionY !== 'bottom' ? ' top-5' : ' bottom-5'}`
      // if (config.positionX === 'right') {
      //   tosterContainer.className += ' right-5'
      // }
      // if (config.positionY !== 'bottom') {
      //   tosterContainer.className += ' top-5'
      // }
    }
    tosterContainer.appendChild(div)

    setTimeout(() => {
      tosterContainer.removeChild(div)
    }, config.duration * 1000)
  }
}

let toster = createToaster({
  positionX: 'right',
  positionY: 'bottom',
  theme: 'light',
  duration: 3,
})

toster('This is the dummy notification')
setTimeout(() => {
  toster('This is mummy notification')
  setTimeout(() => {
    toster('Ye kitne samay me chalega')
  }, 2000)
}, 2000)


let toester = createToaster({
  positionX: 'left',
  positionY: 'top',
  theme: 'dark',
  duration:4,
})

toester("Second packs first toaster !!")
toester("to eat reat")
setTimeout(() => {
  toester("running")
  toester("funning of runnuing money")
 }, 4000)
