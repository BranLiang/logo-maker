import { Controller } from "stimulus"
import WebFont from "webfontloader"
import { htmlToPNG } from "../utils/htmlToImage"

export default class extends Controller {
  static targets = ["google", "text"]

  connect() {
    WebFont.load({
      google: {
        families: this.googleTargets.map(t => {
          return t.style.fontFamily.replace(/['"]+/g, '')
        })
      }
    });
  }

  switch(e) {
    const font = e.target.style.fontFamily.replace(/['"]+/g, '')
    this.textTarget.style.fontFamily = font
  }

  downloadPNG() {
    console.log("Download PNG")
    const element = document.getElementById("logo")
    htmlToPNG(element, {
      height: element.offsetHeight
    })
  }
}
