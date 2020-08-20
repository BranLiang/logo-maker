import { Controller } from "stimulus"
import googleFonts from "../utils/google_fonts_sample"
import WebFont from "webfontloader"
import SearchEngine from "../utils/search_engine"

export default class extends Controller {
  static targets = ["list"]

  connect() {
    this.addGoogleFonts(googleFonts)
  }

  search(e) {
    const key = e.target.value
    const results = SearchEngine.search(key)
    this.clearFonts()
    if (results.length > 0) {
      this.addGoogleFonts(results.slice(0,10))
    }
  }

  clearFonts() {
    while (this.listTarget.lastElementChild) {
      this.listTarget.removeChild(this.listTarget.lastElementChild);
    }
  }

  addGoogleFonts(fonts) {
    fonts.forEach(f => {
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
      this.listTarget.append(element)
    })
    WebFont.load({
      google: {
        families: fonts.map(f => f.family)
      }
    });
  }
}