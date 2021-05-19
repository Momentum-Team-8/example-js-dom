let idOfMountainPic = '#mountain-pic'
let secondImage = document.querySelector(idOfMountainPic)

let url = 'https://source.unsplash.com/200x200/?cat'

document.addEventListener('click', function (event) {
  console.log(event.target)
  // event.target.classList.add('border')
})

const output = document.querySelector('.output')

document.querySelector('.boxes').addEventListener('click', function (event) {
  console.log('You clicked: ', event.target.innerText)
  output.innerText += event.target.innerText
})

// when the equals button is clicked, do the math
document.querySelector('#equals').addEventListener('click', function (event) {
  console.log(eval(output.innerText))
  // How could I get this to show up on the page?
})
