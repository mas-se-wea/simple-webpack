import { add } from './calculator'
import { onClick, getA, getB, getButton, write } from './dom'

export function initEventHandlers() {
  const button = getButton()

  onClick(button, () => {
    const sum = add(getA(), getB())
    write(sum)
  })
}
