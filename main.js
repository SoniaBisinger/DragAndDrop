const list_items = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
    const item = list_items[i];

    item.addEventListener("dragstart", function (e) {
        console.log("dragstart");
        draggedItem = item;
        setTimeout(function () {
            item.style.display = "none";
        }, 0);
    });

    item.addEventListener("dragend", function () {
        console.log("dragend");
        setTimeout(function () {
            draggedItem.style.display = "block";
            draggedItem = null;
        }, 0);
    })

    for (let j = 0; j < lists.length; j++) {
        const list = lists[j];

        // both move items between columns 
        list.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        list.addEventListener("drop", function (e) {
            this.append(draggedItem);
            this.style.backgroundColor = "rgba(248, 111, 3, 0.2)";
        });

        // change colour of the column when moving items
        list.addEventListener("dragenter", function (e) {
            e.preventDefault();
            this.style.backgroundColor = "rgba(248, 111, 3, 0.8)";
        });

        // change column background color to back to original one 
        list.addEventListener("dragleave", function (e) {
            e.preventDefault();
            this.style.backgroundColor = "rgba(248, 111, 3, 0.2)";
        });
    }
}