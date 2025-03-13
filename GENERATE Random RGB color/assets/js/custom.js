function rgbColor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`
}

const updateColor = () => {
    let color = rgbColor();
    let colorBox = document.getElementById("colorBox")
colorBox.style.backgroundColor = color;

document.getElementById("colorCode").innerHTML = color
}


const copyColorCode = () => {
    const colorCode = document.getElementById("colorCode");
    const inputTag = document.createElement("input");
    document.body.appendChild(inputTag);
    inputTag.value = colorCode.innerText;

    inputTag.select();
    document.execCommand("copy");
    document.body.removeChild(inputTag);
}

document.getElementById("copyCode").addEventListener("click", () => {
    copyColorCode()
})
document.getElementById("newColor").addEventListener("click", () => {
    updateColor()
})