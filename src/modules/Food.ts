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
      const stage = document.getElementById('stage')!
      const stageStyle = getComputedStyle(stage)!
      const stageWidth = parseInt(stageStyle.width) - 2 * parseInt(stageStyle.borderWidth)
      const foodWidth = document.getElementById('food')!.offsetWidth
      const maxDistance = (stageWidth - foodWidth)
      return Math.round(Math.random() * (maxDistance / 10)) * 10 + 'px'
    }
    this.element.style.left = getRandomPx()
    this.element.style.top = getRandomPx()
  }
}

export default Food