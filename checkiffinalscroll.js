function loadScroll(){
  let size_document_h = document.body.offsetHeight
  let posY = Math.ceil(window.scrollY) + window.innerHeight
  console.log(size_document_h)
  console.log(posY)
  if(size_document_h - posY == 0)
    console.log('chegou ao fim')
}