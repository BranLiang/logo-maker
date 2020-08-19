import { Controller } from "stimulus"
import WebFont from "webfontloader"

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
}
