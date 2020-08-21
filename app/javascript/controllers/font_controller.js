import { Controller } from "stimulus"
import googleFonts from "../utils/google_fonts"
import WebFont from "webfontloader"
import SearchEngine from "../utils/search_engine"

export default class extends Controller {
  static targets = ["list", "loader"]

  connect() {
    this.addGoogleFonts(googleFonts)
    this.loadFonts(googleFonts)
  }

  search() {
    const key = document.getElementById("search-keyword").value
    const results = SearchEngine.search(key)
    console.log(results)
    this.clearFonts()
    if (results.length > 0) {
      this.showFonts(results)
    } else {
      this.showAll()
    }
  }

  clearFonts() {
    for (var i = 0; i < this.listTarget.children.length; i++) {
      const child = this.listTarget.children[i]
      child.classList.add('hidden');
    }
  }

  showFonts(fonts) {
    const families = fonts.map(f => f.family)
    for (var i = 0; i < this.listTarget.children.length; i++) {
      const child = this.listTarget.children[i]
      const family = child.style.fontFamily.replace(/['"]+/g, '')
      if (families.indexOf(family) >= 0) {
        child.classList.remove('hidden')
      }
    }
  }

  showAll() {
    for (var i = 0; i < this.listTarget.children.length; i++) {
      const child = this.listTarget.children[i]
      child.classList.remove('hidden');
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
  }
  
  loadFonts(fonts) {
    WebFont.load({
      google: {
        families: fonts.map(f => f.family)
      }
    });
  }
}