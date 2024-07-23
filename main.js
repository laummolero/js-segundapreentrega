const inventory = [];

//funcion para añadir un item
function addItem(number, name) {
  inventory.push({ number, name });
}

//funcion para mostrar items
function displayItems() {
  console.log("Inventory Items:");
  inventory.forEach((item) => {
    console.log(`${item.number}: ${item.name}`);
  });
}

//usuario añade un item
while (true) {
  let numberInput = prompt('Enter the item number (or type "stop" to finish):');
  if (numberInput.toLowerCase() === "stop") {
    break; //sale del loop si el usuario escribe "stop"
  }
  let nameInput = prompt("Enter the item name:");
  addItem(numberInput, nameInput);
}

//filtrar item basado en que el numero de los item sean mayor a 100
const filteredItems = inventory.filter((item) => item.number >= 100);

//mostrar item filtrados
console.log("Filtered Inventory Items:");
filteredItems.forEach((item) => {
  console.log(`${item.number}: ${item.name}`);
});
