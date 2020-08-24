import { add } from './calculator'

export function initEventHandlers(): void {
  const button = document.getElementById('my-button')
  button.addEventListener('click', () => {
    const sum = add(getA(), getB())
    write(sum.toString())
  })
}

const getA = (): number => {
  const input = document.getElementById('input-a') as HTMLInputElement
  return Number(input.value)
}

const getB = (): number => {
  const input = document.getElementById('input-b') as HTMLInputElement
  return Number(input.value)
}

const write = (value: string): void => {
  const output = document.getElementById('output')
  output.innerHTML = value
}
