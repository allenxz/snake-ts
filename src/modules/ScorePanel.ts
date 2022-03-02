class ScorePanel {
  score = 0
  level = 1
  scoreSpan: HTMLElement
  levelSpan: HTMLElement
  maxLevel: number
  upScore: number

  constructor (maxLevel:number, upScore: number) {
    this.scoreSpan = document.getElementById('score')!
    this.levelSpan = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  addScore () {
    this.scoreSpan.innerHTML = ++this.score + ''
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }

  levelUp () {
    if (this.level < this.maxLevel) {
      this.levelSpan.innerHTML = ++this.level + ''
    }
  }
}

export default ScorePanel