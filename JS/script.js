document.querySelector('.main_6_btn_link').addEventListener('click', async (event) => {
    event.preventDefault()
    const response = await fetch('/post-data', {
        method: 'POST'
    })
})



let header = document.body.getElementByID("main_3_block_2_head2")
let unheader = document.body.getElementByID("main_3_block_2_unhed2")
let txt = document.body.getElementByID("main_3_block_2_txt2")
console.log(header)
console.log(unheader)
console.log(txt)


function plusComment() {
    if (header.style.display === 'none') {
      header.style.display = 'inline'
      unheader.style.display = 'inline'
      txt.style.display = 'inline'
    }
  }