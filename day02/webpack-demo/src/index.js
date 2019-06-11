import _ from 'lodash'
import printMe from './print.js'

function component() {
  let element = document.createElement('div')
  element.innerHTML = _.join(['hello', 'webpack'], ' ')

  var btn = document.createElement('button')
  btn.innerHTML = '点击这里，然后查看console'
  btn.onclick = printMe
  
  element.appendChild(btn)
  
  return element
}

document.body.appendChild(component())

if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!')
    printMe()
  })
}