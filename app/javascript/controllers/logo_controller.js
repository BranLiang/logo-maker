import { Controller } from "stimulus"
import domtoimage from 'dom-to-image';

export default class extends Controller {
  connect() {
    document.addEventListener('font-switch', ({ detail }) => {
      const logo = document.getElementById("logo")
      logo.style.fontFamily = detail.family
    })
  }

  downloadPNG() {
    const element = document.getElementById("logo")
    domtoimage.toPng(element)
      .then((dataUrl) => {
        var link = document.createElement('a');
        link.download = 'logo.png';
        link.href = dataUrl
        link.click()
      })
  }

  round(e) {
    const element = document.getElementById("logo")
    element.style.borderRadius = `${e.target.value}px`
  }
}
