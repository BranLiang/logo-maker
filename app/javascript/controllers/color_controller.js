import { Controller } from "stimulus"
import Pickr from '@simonwep/pickr'

export default class extends Controller {
  connect() {
    const target = this.data.get("target")
    const logo = document.getElementById("logo")
    let defaultColor = ''
    if (target === 'text') {
      defaultColor = getComputedStyle(logo).color
    } else {
      defaultColor = getComputedStyle(logo).backgroundColor
    }
    const pickr = Pickr.create({
      el: this.element,
      theme: 'classic', // or 'monolith', or 'nano'
      default: defaultColor,

      swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
      ],

      components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          input: true,
          clear: true,
          save: true
        }
      }
    });

    pickr.on('save', color => {
      let rgba = 'rgba(0,0,0,0)'
      if (color) {
        rgba = color.toRGBA().toString(3)
      }
      if (target === "text") {
        logo.style.color = rgba
      } else {
        logo.style.backgroundColor = rgba
      }
    })
  }
}