import avater from './avater.jpg'
import './index.scss'

let img = new Image()
img.src = avater

let root = document.getElementById('root')
img.classList.add('avatar')

root.append(img)