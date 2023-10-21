function createLoadingImage() {
  const img = document.createElement('img')
  img.dataset.role = 'img-loading'
  img.src = '/src/assets/images/loading.gif'
  img.className = 'img-loading'
  return img
}
function getLoadingImage(el: HTMLElement) {
  return el.querySelector('img[data-role=img-loading]') || createLoadingImage()
}
// 仅仅需要在 mounted 和 updated,简写为一个函数
export default function (el: HTMLElement, binding: any) {
  el.style.position = 'relative'
  const img = getLoadingImage(el)
  if (binding.value)
    el.appendChild(img)
  else
    img.remove()
}
