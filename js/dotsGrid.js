const generateDots = () => {
    const dotHTML = '<div class="dotsGrid__dot"></div>';
    const dotsGridHTML = [];
    for(let i=0; i<16; i++) {
        dotsGridHTML.push(dotHTML)
    }
    const grids = document.querySelectorAll('.dotsGrid');
    console.log(grids)
    grids.forEach(grid => {
        grid.innerHTML = dotsGridHTML.join('')
    })
}

generateDots()
