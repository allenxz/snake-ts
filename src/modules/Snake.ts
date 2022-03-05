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
    if (val === this.X) return

    if (val < 0 || val > 290) {
      throw new Error('蛇撞墙了')
    }

    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === val) {
      if (val > this.X) {
        val = this.X - 10
      } else {
        val = this.X + 10
      }
    }

    this.moveBody()

    this.head.style.left = val + 'px'
    
    this.checkHeadBody()

  }

  set Y (val: number) {
    if (val === this.Y) return

    if (val < 0 || val > 290) {
      throw new Error('蛇撞墙了')
    }
    
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === val) {
      if (val > this.Y) {
        val = this.Y - 10
      } else {
        val = this.Y + 10
      }
    }

    this.moveBody()

    this.head.style.top = val + 'px'

    this.checkHeadBody()
    
  }

  addBody () {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  moveBody () {
    let i = this.bodies.length
    while (--i > 0) {
      const cur = this.bodies[i] as HTMLElement
      const prev = this.bodies[i - 1] as HTMLElement
      cur.style.left = prev.offsetLeft + 'px'
      cur.style.top = prev.offsetTop + 'px'
    }
  }

  checkHeadBody () {
    for (let i = 1; i < this.bodies.length; i++) {
      const bd = this.bodies[i] as HTMLElement
      if (bd.offsetLeft === this.X && bd.offsetTop === this.Y) {
        throw new Error('蛇撞到了身体！')
      }
    }
  }
}

export default Snake