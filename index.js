//Change document background color to silver

document.getElementById("body").style.backgroundColor="grey";

//Change the font color for h1 title tag to green

document.getElementById("title").style.color="green";

//Change the font case for h3 title tags touppercase

document.getElementById("subtitle").style.textTransform="uppercase";

//Add one more fruit to the fruits list
 
let list1 = document.createElement("li");
list1.classList.add("fruitList");
list1.id = "fruitList"; 
list1.textContent = "Mango";

let fruitsContainer = document.getElementById("fruits");
if (fruitsContainer) { 
  fruitsContainer.appendChild(list1);
}


// Add one more vegetable to the vegetables list

let list2 = document.createElement("li");
list2.classList.add("vegetableList");
list2.id = "fruitList"; 
list2.textContent = "Kales";

let vegetableContainer = document.getElementById("fruits");
if (vegetableContainer) { 
    vegetableContainer.appendChild(list2);
}
