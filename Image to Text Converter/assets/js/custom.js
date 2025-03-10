
const extractText = () => {
    const fileInput = document.querySelector("#fileInput");
    const outputText = document.querySelector("#output");

    imageFile = fileInput.files[0];

    if (!imageFile) {
        outputText.textContent = "Please select an image file."
        return;
    }

    Tesseract.recognize(
        imageFile,
        'eng'
    ).then(({data}) => {
        outputText.textContent = data.text;
    }).catch((error) => {
        console.log(error);
        
    })

}

document.querySelector("#btn").addEventListener("click", () => {
    extractText();
})

