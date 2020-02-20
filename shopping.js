let deleteButton = Array.from(document.querySelectorAll('.delete'));
let plusButton = Array.from(document.querySelectorAll('.plus'));
let minusButton = Array.from(document.querySelectorAll('.minus'));
let quantity = Array.from(document.querySelectorAll('.qty'));
let total = document.querySelector('.total');
let price = Array.from(document.querySelectorAll('.price'));
let list = Array.from(document.querySelectorAll('.list'));
// let tot = 0


function somme() {
    price = Array.from(document.querySelectorAll('.price'));
    quantity = Array.from(document.querySelectorAll('.qty'));
    let sum = 0
    for (let i = 0; i <= price.length; i++) {
        sum = sum + Number(price[i].innerHTML) * Number(quantity[i].value)
        // console.log("price", price)
        // console.log('qut', Number(quantity[i].value))

        total.innerHTML = sum
        console.log("total", total.innerHTML)

    }
}




for (let el of plusButton) {
    el.addEventListener('click', () => {
        let elPlus = el.nextElementSibling;
        elPlus.value = parseInt(elPlus.value) + 1
        somme()
        //    console.log("sommePlus",somme()) 
    }
    )
}

for (let el of minusButton) {
    let elMinus = el.previousElementSibling;
    el.addEventListener('click', () => {
        if (elMinus.value > 0) {
            elMinus.value = Number(elMinus.value) - 1
        }
        somme()

    })
}


for (let i = 0; i <= deleteButton.length; i++) {
    // console.log("Somme",somme());
    deleteButton[i].addEventListener('click', () => {
        console.log('btnnnnn', i, deleteButton[i])
        list[i].remove();
        // console.log("Sommebtn",somme());
        somme()

    })
}





