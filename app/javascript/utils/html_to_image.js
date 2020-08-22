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
    const radius = parseInt(attributes.borderRadius)
    ctx.arc(radius, radius, radius, Math.PI, Math.PI * 1.5, false)
    ctx.lineTo(element.offsetWidth - 2*radius, 0)
    ctx.arc(element.offsetWidth - radius, radius, radius, Math.PI * 1.5, 0, false)
    ctx.lineTo(element.offsetWidth, element.offsetHeight - 2*radius)
    ctx.arc(element.offsetWidth - radius, element.offsetHeight - radius, radius, 0, Math.PI * 0.5, false)
    ctx.lineTo(radius, element.offsetHeight)
    ctx.arc(radius, element.offsetHeight - radius, radius, Math.PI * 0.5, Math.PI, false)
    ctx.lineTo(0, radius)
    ctx.fill()
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
