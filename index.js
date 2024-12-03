const f = new Object()
f.name = "grape"
f.calories = 80
f.price = 6
f.print = function () {
    console.log(this.name, this.calories, this.price)
}
let fruitArr = [
    {
        name: "apple", calories: 60, price: 2, print: function () {
            console.log(this.name, this.calories, this.price)
        }
    },
    {
        name: "orange", calories: 70, price: 0.8, print: function () {
            console.log(this.name, this.calories, this.price)
        }
    },
    f
]
for (let i = 0; i < fruitArr.length; i++) {
    fruitArr[i].print()
}
fruitArr[0].color = "red"
for (let i = 0; i < fruitArr.length; i++) {
    if ('color' in fruitArr[i])
        fruitArr[i].print()
}
for (key in fruitArr[0]) {
    console.log(key, fruitArr[0][key]);
}
delete (fruitArr[1].price);
let str = '';
for (key in fruitArr[1]) {
    str += fruitArr[1][key] + " ";
}
document.getElementById('p1').innerHTML = str
function changePrice() {
    fruitArr[0].Price = parseFloat(document.getElementById('txt1').value)
}
function deleteCalories() {
    fruitArr = fruitArr.filter(x => x.calories <= document.getElementById('txt2').value);
}
for (let i = 0; i < fruitArr.length; i++) {
    Object.defineProperty(fruitArr[i], "Price", {
        set(pr){
            if(pr>10 && pr<10000)
                this.price=pr
        }
    })    
}
fruitArr[0].price