export const getButton = () => document.getElementById('my-button')

export const onClick = (element, callback) =>
  element.addEventListener('click', callback)

export const getA = () => document.getElementById('input-a').value

export const getB = () => document.getElementById('input-b').value

export const write = value =>
  (document.getElementById('output').innerHTML = value)
