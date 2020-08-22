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
  const canvasRatio = height / element.offsetHeight
  const ratio = element.offsetWidth / element.offsetHeight
  const width = parseInt(height * ratio)
  canvas.height = height
  canvas.width = width

  // Fill background
  if (backgroundColor) {
    ctx.fillStyle = backgroundColor
    const radius = parseInt(attributes.borderRadius) * canvasRatio
    console.log(radius)
    console.log(attributes.borderRadius)
    console.log(canvasRatio)
    ctx.arc(radius, radius, radius, Math.PI, Math.PI * 1.5, false)
    ctx.lineTo(width - 2*radius, 0)
    ctx.arc(width - radius, radius, radius, Math.PI * 1.5, 0, false)
    ctx.lineTo(width, height - 2*radius)
    ctx.arc(width - radius, height - radius, radius, 0, Math.PI * 0.5, false)
    ctx.lineTo(radius, height)
    ctx.arc(radius, height - radius, radius, Math.PI * 0.5, Math.PI, false)
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
