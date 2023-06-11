const lists = document.getElementsByClassName("list");
const leftBox = document.getElementById("left");
const rightBox = document.getElementById("right");

for (list of lists) {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;

    console.log("dragstart has been trigger");

    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
      console.log("dragover has been trigger");
    });
    rightBox.addEventListener("drop", (e) => {
      rightBox.appendChild(selected);
      selected = null;
      console.log("drop has been trigger");
    });
    leftBox.addEventListener("dragover", (e) => {
      e.preventDefault();
      console.log("dragover has been trigger");
    });
    leftBox.addEventListener("drop", (e) => {
      leftBox.appendChild(selected);
      selected = null;
      console.log("drop has been trigger");
    });
  });
}