const colorButton = document.getElementById('btn');
const square = document.getElementById('square');

colorButton.onclick = () => {
    const color = document.querySelector('input[type=text]').value;
    square.style.backgroundColor = color;
}

document.getElementById('e_btn').style.display='none';

document.querySelector('input[type=range]').onchange = (ev) => {
    const circle = document.getElementById('circle');
    circle.style.width = `${ev.target.value}%`
    circle.style.height = `${ev.target.value}%`
}