const itemInput = document.getElementById("itemInput");
const addButton = document.querySelector("#addButton");
const shoppingList = document.getElementById("shoppingList");


addButton.addEventListener("click", () => {
    const itemText = itemInput.value.trim();

    if (itemText === ""){
        alert("Please enter an item.");
    return;
    }

    const editButton = document.createElement("button");
    editButton.textContent = "edit";

    const removeButton = document.createElement('button');
    removeButton.textContent = "remove";

    const li = document.createElement("li");
    const span = document.createElement("span");
        span.textContent = itemText;


    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    shoppingList.appendChild(li);

    removeButton.addEventListener("click", () => {
        shoppingList.removeChild(li);
    });

    editButton.addEventListener("click", () => {
        if (editButton.textContent === "edit") {
            const revisedInput = document.createElement("input");
                revisedInput.value = span.textContent;

            li.replaceChild(revisedInput, span);
            editButton.textContent = "Save";
    //button is save; update text and/or remove pending user input
    } else {
        const revisedInput = li.querySelector("input");

        if (revisedInput.value.trim() === "") {
            li.remove();
        } else {
            span.textContent = revisedInput.value;
            li.replaceChild(span, revisedInput);
            editButton.textContent = "Edit";
        }
    }
    })
})
