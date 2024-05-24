function addP() {
  let newP = document.createElement("p");
  let txtNode = document.createTextNode("DOM stands for Document Object Model");
  newP.appendChild(txtNode);
  document.getElementById("info").appendChild(newP);
}
