const carrito = [];
const ul = document.querySelector(".listaDinamica");
const fragment = document.createDocumentFragment();

const item = prompt("Que desea comprar?");
carrito.push(item);

while(confirm("Desea comprar algo mas?")) {
    const item = prompt("Que desea comprar?");
    carrito.push(item);
}

carrito.forEach((item) => {
    const li = document.createElement("li")

    if (item === null) {
        item = ("No compraste nada")
    }

    li.textContent = item; 
    fragment.appendChild(li);
});

const tuCarrito= document.querySelector(".tuCarrito");
const tuCarritoText = document.createElement("span");
tuCarrito.textContent = "Compraste:";

tuCarrito.appendChild(tuCarritoText);
ul.appendChild(fragment);
