const app = document.createElement("div");
app.className = "app";

const title = document.createElement("h2");
title.innerText = "📝 To-Do List";

const inputBox = document.createElement("div");
inputBox.className = "input-box";

const input = document.createElement("input");
input.placeholder = "Enter your task";

const addBtn = document.createElement("button");
addBtn.innerText = "Add";

const list = document.createElement("ul");

addBtn.onclick = () => {
    if (input.value.trim() === "") {
        alert("Enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = input.value;
    span.onclick = () => li.classList.toggle("done");

    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.onclick = () => li.remove();

    li.append(span, delBtn);
    list.appendChild(li);
    input.value = "";
};

inputBox.append(input, addBtn);
app.append(title, inputBox, list);

document.body.appendChild(app);
