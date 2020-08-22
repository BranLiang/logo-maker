import { Controller } from "stimulus"
import { htmlToCanvas, canvasToPNG } from "../utils/html_to_image"

export default class extends Controller {
  connect() {
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
}
