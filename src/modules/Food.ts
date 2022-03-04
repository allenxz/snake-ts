class Food {
  element: HTMLElement

  constructor () {
    this.element = document.getElementById('food')!
  }

  get X () {
    return this.element.offsetLeft
  }

  get Y () {
    return this.element.offsetTop
  }

  change () {
    const getRandomPx = () => {
      return Math.round(Math.random() * 29) * 10 + 'px'
    }
    this.element.style.left = getRandomPx()
    this.element.style.top = getRandomPx()
  }
}

export default Food