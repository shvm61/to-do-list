let item = document.querySelectorAll(".items");
let add = document.querySelector(".add-new");
let display = document.querySelector(".get-input");
let list = document.querySelector(".item-list");
let search = document.querySelector(".search");
// let cross = document.querySelectorAll(".cross");
// console.log(item);
let total = 0;
let completed = 0;
statusUpdate();
list.addEventListener("click", toggle);
add.addEventListener("click", addItem);
list.addEventListener("click", removeItem);
search.addEventListener("keyup", searchItem);
function toggle(e) {
  if (e.target.classList.contains("items")) {
    if (e.target.classList.contains("checked")) {
      e.target.classList.remove("checked");
      completed--;
    } else {
      completed++;
      e.target.classList.add("checked");
    }
  }
  statusUpdate();
}

function addItem() {
  let singleItem = document.createElement("li");
  singleItem.classList.add("items");
  let t = document.createTextNode(display.value.trim());
  if (t.textContent == "") {
    alert("No text");
    return;
  }

  singleItem.appendChild(t);
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "cross";
  span.appendChild(txt);
  singleItem.appendChild(span);
  list.appendChild(singleItem);
  cross = document.querySelectorAll(".cross");
  display.value = "";
  item = document.querySelectorAll(".items");
  total++;
  statusUpdate();
  // console.log(item);

  // console.log(cross);
}
function removeItem(e) {
  // console.log(cross);
  if (e.target.className == "cross") {
    // console.log("delete cross");
    let li = e.target.parentElement;
    list.removeChild(li);
    display.value = "";
    total--;
    if (li.classList.contains("checked")) completed--;
    statusUpdate();
  }
}

function searchItem(e) {
  let text = e.target.value;

  for (let i = 0; i < item.length; i++) {
    // console.log(text, item[i].textContent.toLowerCase());

    if (item[i].textContent.toLowerCase().indexOf(text.toLowerCase()) != -1) {
      item[i].style.display = "block";
    } else {
      item[i].style.display = "none";
    }
  }
}

function statusUpdate() {
  document.querySelector(".total").innerHTML = "TOTAL: " + total;
  document.querySelector(".completed").innerHTML = "COMPLETED: " + completed;
}
