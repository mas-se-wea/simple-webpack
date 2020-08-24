import { add } from './calculator'

export function initEventHandlers() {
  const button = document.getElementById('my-button')
  button.addEventListener('click', () => {
    const sum = add(getA(), getB())
    write(sum)
  })
}

const getA = () => document.getElementById('input-a').value

const getB = () => document.getElementById('input-b').value

const write = value => (document.getElementById('output').innerHTML = value)
