let counterElement = document.querySelector("#counter");
let plusBtn = document.querySelector("#plusBtn")
let minusBtn = document.querySelector("#minusBtn")

let count = 0;

const updateCounter = (value) => {
    // plus button code 
    count = count + value;
    counterElement.textContent = count;
    if (count >= 10) {
        plusBtn.setAttribute("disabled", true)
    } else {
        plusBtn.removeAttribute("disabled", false)
    }

    // minus button code 
    if(count <= 0){
        minusBtn.setAttribute("disabled", true)
    } else {
        minusBtn.removeAttribute("disabled", false)
    }
}


plusBtn.addEventListener("click", () => {
    updateCounter(1)
})
minusBtn.addEventListener("click", ()=> {
    updateCounter(-1)
})