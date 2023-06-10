const colors = ["green", "red", "rgba(133,122,200)", "#f15025", 'blue', 'yellow', 'black', '#000000', '#ffffff'];

const btn = document.querySelector('.btn')
const text = document.querySelector('.color')

const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    text.textContent = colors[randomNumber]
}

btn.addEventListener('click', handleClick)

