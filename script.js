let ball = document.getElementById('boll');
let section = document.getElementById('section_three');
section.addEventListener('mousemove',(e) => {
    let x = e.clientX;
    let y = e.clientY;
    ball.style.top = `${y}px`;
    ball.style.left = `${x}px`;
    ball.style.display = 'block';
})
// section.addEventListener('mouseout',() => {
//     ball.style.display = 'none';
// })
