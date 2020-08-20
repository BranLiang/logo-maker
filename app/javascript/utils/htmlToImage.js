const defaultOptions = { height: 150 }

export const htmlToPNG = (element, { height } = defaultOptions) => {
  // const canvas = document.createElement('canvas')
  const canvas = document.getElementById("test-canvas")
  const ctx = canvas.getContext('2d')

  // Element attributes
  const attributes = getComputedStyle(element)
  const backgroundColor = attributes.backgroundColor
  const color = attributes.color
  const fontFamily = attributes.fontFamily.replace(/['"]+/g, '')

  // Setup canvas
  const ratio = element.offsetWidth / element.offsetHeight
  const width = parseInt(height * ratio)
  canvas.height = height
  canvas.width = width

  // Fill background
  if (backgroundColor) {
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, width, height)
  }

  // Text styles
  const fontSizeRatio = parseInt(attributes.lineHeight) / parseInt(attributes.height)
  ctx.font = `${parseInt(height * fontSizeRatio)}px ${fontFamily}`
  ctx.textAlign = "center"
  ctx.textBaseline = 'middle'
  ctx.fillStyle = color

  // Fill texts
  ctx.fillText(element.textContent, parseInt(width/2), parseInt(height/2))
}
