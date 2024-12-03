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
        set(pr) {
            if (pr > 10 && pr < 10000)
                this.price = pr
        }
    })
}
//ex 2
//1
function Message(title, p) {
    this.title=title
    this.p=p
}
function MessageBox(color, backGroundColor, icon, msg = {title:'',p:''}) {
    this.color=color
    this.backGroundColor=backGroundColor
    this.icon=icon
    this.msg=msg
    this.render=()=>{
        let m=document.createElement('div');
        m.setAttribute("id","message")
        m.style.color=this.color
        m.style.backgroundColor=this.backGroundColor
        let i=document.createElement('img');
        i.setAttribute("src",icon)
        m.appendChild(i)
        let h=document.createElement('h1')
        h.innerHTML=msg.title
        m.appendChild(h)
        let p=document.createElement('p')
        p.innerHTML=msg.p
        m.appendChild(p)
        document.body.appendChild(m)
    }
}
//2
const info1=new MessageBox("grey","black","images/d6.png")
const warning1=new MessageBox("orange","black","images/m4.png")
const error1=new MessageBox("red","black","images/s2-removebg-preview.png")
//3
const messages={info:info1, warning:warning1,error:error1}
//5
function add(){
    let typeMsg=document.getElementById('s').value
    messages[typeMsg].msg.title=document.getElementById('txtH').value
    messages[typeMsg].msg.p=document.getElementById('txtP').value
    messages[typeMsg].render();
}
