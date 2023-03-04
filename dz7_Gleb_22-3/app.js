const parentBlock = document.querySelector('.parent_block')
const url = 'https://jsonplaceholder.typicode.com/posts'
const fetchRequest = async () => {
    const request = await fetch(url)
    const info = await request.json()
    info.map((item)=>{
        const innerBlock = document.createElement('div')
        innerBlock.setAttribute('class', 'inner_block')
        parentBlock.append(innerBlock)
        const h4 = document.createElement('h4')
        innerBlock.append(h4)
        h4.innerText = item.title
        const blockContent = document.createElement('div')
        blockContent.setAttribute('class', 'block_content')
        innerBlock.append(blockContent)
        const img = document.createElement('img')
        const p = document.createElement('p')
        blockContent.append(img)
        blockContent.append(p)
        p.innerText = item.body
        img.src = './photo/images.jpg'
    })
}
fetchRequest()