import { Controller } from "stimulus"
import googleFonts from "../utils/google_fonts_sample"
import WebFont from "webfontloader"
import SearchEngine from "../utils/search_engine"

export default class extends Controller {
  connect() {
    googleFonts.forEach(f => {
      const element = document.createElement('div')
      element.style.fontFamily = f.family
      element.textContent = f.display_name || f.family
      element.addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent('font-switch', {
          detail: {
            family: f.family
          }
        }))
      })
      this.element.append(element)
    })
    WebFont.load({
      google: {
        families: googleFonts.map(f => f.family)
      }
    });
  }
}