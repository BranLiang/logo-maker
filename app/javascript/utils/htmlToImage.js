const defaultOptions = { height: 150 }

export const htmlToPNG = (element, { height } = defaultOptions) => {
  // const canvas = document.createElement('canvas')
  const canvas = document.getElementById("test-canvas")
  const ctx = canvas.getContext('2d')

  // Setup canvas
  const ratio = element.offsetWidth / element.offsetHeight
  const width = parseInt(height * ratio)
  canvas.height = height
  canvas.width = width

  // Text styles
  ctx.font = `${parseInt(height * 0.6)}px ${element.style.fontFamily.replace(/['"]+/g, '')}`
  ctx.textAlign = "center"
  ctx.textBaseline = 'middle'
  ctx.fillStyle = element.style.color

  // Fill texts
  ctx.fillText(element.textContent, parseInt(width/2), parseInt(height/2))
}
