import { Controller } from "stimulus"
import { htmlToCanvas, canvasToPNG } from "../utils/html_to_image"

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

  downloadPNG() {
    const element = document.getElementById("logo")
    const heightInput = document.getElementById("logo-height")
    const canvas = htmlToCanvas(element, {
      height: heightInput.value || element.offsetHeight
    })
    canvasToPNG(canvas)
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
