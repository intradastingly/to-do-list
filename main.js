window.addEventListener('load', main);

function main() {
    eventListeners();
}

function eventListeners(){
   const confirm = document.getElementById('confirmAddItem');
   const remove = document.getElementById('removeItem');
   confirm.onclick = addNewItemToList;
   remove.onclick = removeLastItemFromList;
}

function takeInput(){
    const input = document.getElementById('addItem').value;
    addNewItemToList(input);
}

function addNewItemToList(input){
    console.log(input);
}

function removeLastItemFromList(){

}



/* let cars = ['porsche', 'ferrari', 'Toyota', 'mustang', 'ford'];

function removeLastArrayItem(){
        cars.pop();
        console.log(cars);
        createList();
}

function addNewCar(){
    let newCar = prompt()
    cars.push(newCar);
    console.log(cars);
    createList();
}

function carSearch(){
    let search = prompt();
    for (let i = 0; i < cars.length; i++) {
        if (search === cars[i]){
            console.log("you searched for " + search);
            break;
        } else {
            console.log("your search did not match any cars");
        }
    }
}

function createList(){
    let body = document.querySelector('body');
    let unorderedList = document.createElement('ul');
    body.appendChild(unorderedList);
    for (let i = 0; i < cars.length; i++) {
        let carsItems = document.createElement('li');
        carsItems.innerHTML = cars[i];
        unorderedList.appendChild(carsItems);
    }
} */

//take value from input
//add to array
//append array to ul 

