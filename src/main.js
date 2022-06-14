import './view/styles/index.scss'

class FluidTypography {
  constructor(minVW, maxVW, minFontSize, maxFontSize) {
    this.minVW = minVW
    this.maxVW = maxVW
    this.minFontSize = minFontSize
    this.maxFontSize = maxFontSize
    this.maxRem = this.computeRem().maxRem
    this.minRem = this.computeRem().minRem
  }

  computeRem() {
    const body = document.documentElement
    const properties = window.getComputedStyle(body)
    const baseFontSize = properties.fontSize.replace(/px/, '')
    const max = Math.max(this.minFontSize, baseFontSize)
    const relativeMax = (this.maxFontSize * max) / this.minFontSize
    const maxRem = relativeMax / baseFontSize
    const minRem = max / baseFontSize
    return { maxRem, minRem }
  }

  fontSize() {
    const width = document.documentElement.offsetWidth
    let rem = this.minRem

    if (width > this.minVW && width < this.maxVW) {
      rem =
        this.minRem +
        ((this.maxRem - this.minRem) * (width - this.minVW)) /
          (this.maxVW - this.minVW)
    }

    if (width > this.maxVW) {
      rem = this.maxRem
    }

    document.documentElement.style = `font-size: ${rem}rem`
  }

  resizeHandler() {
    this.fontSize()
    window.addEventListener('resize', this.fontSize.bind(this))
  }
}

new FluidTypography(640, 1280, 17.5, 22).resizeHandler()
