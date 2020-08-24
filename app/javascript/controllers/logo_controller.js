import { Controller } from "stimulus"
import domtoimage from 'dom-to-image';

export default class extends Controller {
  connect() {
    const element = document.getElementById("logo")
    const attributes = getComputedStyle(element)
    this.paddingTop = parseInt(attributes.paddingTop)
    this.paddingBottom = parseInt(attributes.paddingBottom)
    document.addEventListener('font-switch', ({ detail }) => {
      const logo = document.getElementById("logo")
      logo.style.fontFamily = detail.family
    })
  }

  downloadSVG() {
    const element = document.getElementById("logo")
    domtoimage.toSvg(element)
      .then((dataUrl) => {
        var link = document.createElement('a');
        link.download = 'logo.svg';
        link.href = dataUrl
        link.click()
      })
  }

  round(e) {
    const element = document.getElementById("logo")
    element.style.borderRadius = `${e.target.value}px`
  }

  verticalMove(e) {
    const element = document.getElementById("logo")
    const attributes = getComputedStyle(element)
    const move = e.target.valueAsNumber
    element.style.paddingTop = `${this.paddingTop - move}px`
    element.style.paddingBottom = `${this.paddingBottom + move}px`
  }
}
