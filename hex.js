const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('.btn')
const text = document.querySelector('.color')

const createHex = () => {
    let hexColor = '#'
    for(let i = 0; i < 6; i++)
    {
        let hexNumber = Math.floor(Math.random() * hex.length)
        hexColor += hex[hexNumber]
    }
    document.body.style.backgroundColor = hexColor;
    text.textContent = hexColor
}

btn.addEventListener('click', createHex)