class Snake {
  head: HTMLElement
  bodies: HTMLCollection
  element: HTMLElement

  constructor () {
    this.head = document.querySelector('#snake > div') as HTMLElement
    this.element = document.getElementById('snake')!
    this.bodies = this.element.getElementsByTagName('div')
  }

  get X () {
    return this.head.offsetLeft
  }

  get Y () {
    return this.head.offsetTop
  }

  set X (val: number) {
    this.head.style.left = val + 'px'
  }

  set Y (val: number) {
    this.head.style.top = val + 'px'
  }

  addBody () {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }
}

export default Snake