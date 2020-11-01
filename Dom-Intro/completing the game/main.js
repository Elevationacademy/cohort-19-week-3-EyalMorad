// console.log(document)
// Exercise : Completing The Game
const moveRight = function(){
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left += 15
    block.style.left = left + "px"
}



const moveLeft = function(){
    const block = document.getElementById("block")
    let right = parseInt(block.style.right) || 0
    right += 15
    block.style.right = right + "px"
}


const moveDown = function(){
    const block = document.getElementById("block")
    let up = parseInt(block.style.up) || 0
    up += 15
    block.style.up = up + "px"
}


const moveUp = function(){
    const block = document.getElementById("block")
    let down = parseInt(block.style.down) || 0
    down += 15
    block.style.down = down + "px"
}



