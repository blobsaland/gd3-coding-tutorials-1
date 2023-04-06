const list__item = document.querySelectorAll(".list__item")
const list__item__body = document.querySelectorAll(".list__item__body")

list__item.forEach((item,i) => {
  item.addEventListener('click', (event) => {
    console.log(item.children[1])
    item.children[1].classList.toggle("clicked")
    // item.children[1].style.height = "140px"
  })
})
