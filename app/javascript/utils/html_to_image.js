const defaultOptions = { height: 150 }

export const htmlToCanvas = (element, { height } = defaultOptions) => {
  const canvas = document.createElement('canvas')
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
  return canvas
}

export const canvasToPNG = (canvas) => {
  const png = canvas.toDataURL('image/png')
  var link = document.createElement('a');
  link.download = 'logo.png';
  link.href = png
  link.click()
}

