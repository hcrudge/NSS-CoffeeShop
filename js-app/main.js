const url = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee";

let beanString = ""

let coffeeItems = ""


const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
    getAllCoffees()
        .then(coffees => {
            console.log(coffees);
        }) 
});


function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json())
    .then(beanVarieties => {
        beanVarieties.map((v) => {
            beanString += `<li>${v.name}, sourced from ${v.region} </li>`
    })}).then(displayBeans);
}

function getAllCoffees(){
    return fetch(coffeeUrl).then(resp=>resp.json())
    .then(coffees => {
        coffees.map((c) =>{
            coffeeItems += `<li>${c.title}</li>`
        })
    }).then(displaycoffee);
}

const displayBeans = () => {
    document.getElementById("beans").innerHTML = beanString
}

const displaycoffee = () => {
    document.getElementById("coffee").innerHTML = coffeeItems
}