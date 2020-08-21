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
    const canvas = htmlToCanvas(element, {
      height: element.offsetHeight
    })
    canvasToPNG(canvas)
  }
}
