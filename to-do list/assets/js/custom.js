const addTask = () => {
    const inputTag = document.getElementById("inputTag")
    const inputValue = inputTag.value.trim();

    if (inputValue !== "") {
        const taskListUl = document.getElementById("taskListUl")
        const li = document.createElement("li")
        li.innerHTML = '<input type="checkbox"> ' + inputValue   + ' <button onclick="deletTask(this)"> Delet </button>';
        taskListUl.appendChild(li);

        inputTag.value = "";


    } else {
        alert("Please Add a Task")
    }
};

const deletTask = (btn) => {
    const li = btn.parentNode;
    li.parentNode.removeChild(li)
    
}