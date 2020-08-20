import { Controller } from "stimulus"
import { htmlToPNG } from "../utils/html_to_image"

export default class extends Controller {
  connect() {
    document.addEventListener('font-switch', ({ detail }) => {
      const logo = document.getElementById("logo")
      logo.style.fontFamily = detail.family
    })
  }

  downloadPNG() {
    const element = document.getElementById("logo")
    htmlToPNG(element, {
      height: element.offsetHeight
    })
  }
}
